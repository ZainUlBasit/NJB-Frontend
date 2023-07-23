import React, { useEffect, useState } from "react";
import DataLoader from "../../Components/Loader/DataLoader";
import TableComp from "../../Components/Tables/TableComponent";
import { StockColumns } from "../../assets/Columns/ItemStockColumns";
import moment from "moment";
import { GetItemLegder } from "../../Https";

const ItemLedger = ({ id, fromdate, todate }) => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const GetData = async () => {
    setLoading(true);
    let response = await GetItemLegder({
      id,
      fromdate,
      todate,
    });
    response = response.data;
    response = response.map((re) => ({
      ...re,
      date: moment(re.date).format("DD/MM/YYYY"),
    }));
    setData(response);
    setLoading(false);
  };
  useEffect(() => {
    GetData();
  }, [id, fromdate, todate]);
  return (
    <>
      {Loading ? (
        <DataLoader />
      ) : (
        <TableComp title="Cash Ledger" rows={Data} columns={StockColumns} />
      )}
    </>
  );
};

export default ItemLedger;

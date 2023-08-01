import React, { useEffect, useState } from "react";
import moment from "moment";
import { GetAllPayment } from "../../Https";
import { CashLedgerColumns } from "../../assets/Columns/CashLedgerColumns";
import TableComp from "../../Components/Tables/TableComponent";
import DataLoader from "../../Components/Loader/DataLoader";

const CashLedger = ({ id, fromdate, todate }) => {
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const GetData = async () => {
    setLoading(true);
    let response = await GetAllPayment({
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
        <TableComp
          title="Cash Ledger"
          rows={Data}
          columns={CashLedgerColumns}
        />
      )}
    </>
  );
};

export default CashLedger;

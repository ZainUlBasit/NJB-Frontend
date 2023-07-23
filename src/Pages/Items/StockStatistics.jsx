import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import ItemNav from "../../Components/Navigations/ItemNav";
import TableComp from "../../Components/Tables/TableComponent";
import { StockColumns } from "../../assets/Columns/ItemStockColumns";
import { GetAllItemStock } from "../../Https";
import moment from "moment";

const StockStatistics = () => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    const GetData = async () => {
      let response = await GetAllItemStock();
      response = response.data;
      response = response.map((re) => ({
        ...re,
        date: moment(re.date).format("DD/MM/YYYY"),
      }));
      setData(response);
    };
    GetData();
  }, []);
  return (
    <>
      <Navbar />
      <ItemNav />
      <TableComp title="STOCK STATISTICS" rows={Data} columns={StockColumns} />
    </>
  );
};

export default StockStatistics;

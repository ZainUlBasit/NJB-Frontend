import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import ItemNav from "../../Components/Navigations/ItemNav";
import TableComp from "../../Components/Tables/TableComponent";
import { ItemStockColumns } from "../../assets/Columns/ItemStockColumns";

const StockStatistics = () => {
  return (
    <>
      <Navbar />
      <ItemNav />
      <TableComp
        title="STOCK STATISTICS"
        rows={[
          {
            itemname: "Temp 1",
            itemqty: 2000,
            itemdesc: "Steel",
            iteminvoice: "12345",
            itemtruck: "BA-4466",
            itemdate: "20/03/2023"
          },
        ]}
        columns={ItemStockColumns}
      />
    </>
  );
};

export default StockStatistics;

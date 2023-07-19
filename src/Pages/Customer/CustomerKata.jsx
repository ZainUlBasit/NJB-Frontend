import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import CustomerNav from "../../Components/Navigations/CustomerNav";
import TableComp from "../../Components/Tables/TableComponent";
import { CustomerKataColumns } from "../../assets/Columns/CustomerKataColumns";

const CustomerKata = () => {
  return (
    <>
      <Navbar />
      <CustomerNav />
      <TableComp
        title="CUSTOMERS KATA"
        rows={[
          {
            name: "Muhammad Ismail Khan",
            total: 100000,
            paid: 50000,
            remaining: 50000,
          },
        ]}
        columns={CustomerKataColumns}
      />
    </>
  );
};

export default CustomerKata;

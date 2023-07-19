import React from "react";
import Navbar from "../../Components/NavBar/NavBar";
import AddNewBill from "./AddNewBill";
import CustomerNav from "../../Components/Navigations/CustomerNav";
import TableComp from "../../Components/Tables/TableComponent";
import { CustomerInfoColumns } from "../../assets/Columns/CustomerInfoColumns";

const Customer = () => {
  return (
    <>
      <Navbar />
      <CustomerNav />
      <TableComp
        title="CUSTOMERS INFO"
        rows={[
          {
            name: "Muhammad Ismail Khan",
            cnic: "17101-2992880-3",
            contact: "0311-0312452",
            address: "Charsadda",
          },
        ]}
        columns={CustomerInfoColumns}
      />
    </>
  );
};

export default Customer;

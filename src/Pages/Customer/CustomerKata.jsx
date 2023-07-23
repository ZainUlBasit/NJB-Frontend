import React, { useEffect } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import CustomerNav from "../../Components/Navigations/CustomerNav";
import TableComp from "../../Components/Tables/TableComponent";
import { CustomerKataColumns } from "../../assets/Columns/CustomerKataColumns";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../store/Slices/CustomerSlice";

const CustomerKata = () => {
  const Customers = useSelector((state) => state.CustomerReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);
  return (
    <>
      <Navbar />
      <CustomerNav />
      <TableComp
        title="CUSTOMERS KATA"
        rows={Customers}
        columns={CustomerKataColumns}
      />
    </>
  );
};

export default CustomerKata;

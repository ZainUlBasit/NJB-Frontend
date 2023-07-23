import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import AddNewBill from "./AddNewBill";
import CustomerNav from "../../Components/Navigations/CustomerNav";
import TableComp from "../../Components/Tables/TableComponent";
import { CustomerInfoColumns } from "../../assets/Columns/CustomerInfoColumns";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../store/Slices/CustomerSlice";
import EditCustomer from "../../Components/Modals/EditCustomer";

const Customer = () => {
  const Customers = useSelector((state) => state.CustomerReducer.data);
  const dispatch = useDispatch();
  const [selCust, setSelCust] = useState("");
  const [EditCustomerModal, setEditCustomerModal] = useState(false);
  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);
  return (
    <>
      <Navbar />
      <CustomerNav />
      <TableComp
        title="CUSTOMERS INFO"
        rows={Customers}
        columns={CustomerInfoColumns}
        setSelID={setSelCust}
        setEditCustomerModal={setEditCustomerModal}
      />
      {EditCustomerModal ? (
        <EditCustomer
          open={EditCustomerModal}
          setOpen={setEditCustomerModal}
          customerdata={Customers.filter((cu) => {
            if (cu._id === selCust) {
              return cu;
            }
          })}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Customer;

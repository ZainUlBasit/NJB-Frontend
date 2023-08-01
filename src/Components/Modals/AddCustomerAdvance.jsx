import React, { useEffect, useState } from "react";
import ModalBottomLine from "./ModalBottomLine";
import ModalButton from "../Buttons/ModalButton";
import CustomModal from "./CustomModal";
import SimpleTextInput from "../Input/SimpleTextInput";
import { RegisterCustomer, UpdateCustomerAdvance } from "../../Https";
import { fetchCustomers } from "../../store/Slices/CustomerSlice";
import { useDispatch, useSelector } from "react-redux";
import SimpleSelectComp from "../Select/SimpleSelectComp";

const AddCustomerAdvance = ({ open, setOpen }) => {
  const [ID, setID] = useState("");
  const [Advance, setAdvance] = useState("");
  const Customers = useSelector((state) => state.CustomerReducer.data);
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (ID !== "" && Advance !== "") {
      try {
        const CustomerInfo = {
          id: ID,
          amount: Advance,
        };
        const response = await UpdateCustomerAdvance(CustomerInfo);
        if (response.status === 500) alert("Unable to add Advance");
        else if (response.status === 200) {
          alert("Customer Advance successfully added..!");
          setOpen(false);
          dispatch(fetchCustomers());
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("fill all fields");
    }
  };

  useEffect(() => {
    dispatch(fetchCustomers());
  }, []);
  return (
    <CustomModal title={"Customer Advance"} open={open} setOpen={setOpen}>
      <form className="flex flex-col justify-center items-center">
        <SimpleSelectComp
          value={ID}
          setValue={setID}
          label={"Select Customer"}
          data={Customers}
        />
        <SimpleTextInput
          label="Enter Advance Amount"
          placeholder="Enter Advance Amount"
          type="number"
          id="advance"
          name="advance"
          value={Advance}
          setValue={setAdvance}
        />
        <ModalBottomLine />
      </form>
      <div className="flex justify-center items-center">
        <ModalButton title={"add advance"} onClick={onSubmit} />
      </div>
    </CustomModal>
  );
};

export default AddCustomerAdvance;

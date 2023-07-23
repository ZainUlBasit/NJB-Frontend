import React, { useState } from "react";
import ModalBottomLine from "./ModalBottomLine";
import ModalButton from "../Buttons/ModalButton";
import CustomModal from "./CustomModal";
import SimpleTextInput from "../Input/SimpleTextInput";
import { RegisterCustomer } from "../../Https";
import { fetchCustomers } from "../../store/Slices/CustomerSlice";
import { useDispatch } from "react-redux";

const AddCustomer = ({ open, setOpen }) => {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [Cnic, setCnic] = useState("");
  const [Total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (Name !== "" && Address !== "" && Contact !== "" && Cnic !== "") {
      try {
        const CustomerInfo = {
          name: Name,
          address: Address,
          contact: Contact,
          cnic: Cnic,
        };
        const response = await RegisterCustomer(CustomerInfo);
        if (response.status === 500) alert("Unable to add Customer");
        else if (response.status === 201) {
          alert("Customer successfully added..!");
          setOpen(false);
          dispatch(fetchCustomers());
        }
      } catch (err) {}
    } else {
      alert("fill all fields");
    }
  };
  return (
    <CustomModal title={"Add New Company"} open={open} setOpen={setOpen}>
      <form className="flex flex-col justify-center items-center">
        <SimpleTextInput
          label="Enter Name"
          placeholder="Enter Name"
          type="text"
          id="name"
          name="name"
          value={Name}
          setValue={setName}
        />
        <SimpleTextInput
          label="Enter Address"
          placeholder="Enter Address"
          type="text"
          id="address"
          name="address"
          value={Address}
          setValue={setAddress}
        />
        <SimpleTextInput
          label="Enter Contact"
          placeholder="Enter Contact"
          type="number"
          id="contact"
          name="contact"
          value={Contact}
          setValue={setContact}
        />
        <SimpleTextInput
          label="Enter CNIC"
          placeholder="Enter CNIC"
          type="number"
          id="cnic"
          name="cnic"
          value={Cnic}
          setValue={setCnic}
        />
        <ModalBottomLine />
      </form>
      <div className="flex justify-center items-center">
        <ModalButton title={"add new customer"} onClick={onSubmit} />
      </div>
    </CustomModal>
  );
};

export default AddCustomer;

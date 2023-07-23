import React, { useEffect, useState } from "react";
import ModalBottomLine from "./ModalBottomLine";
import ModalButton from "../Buttons/ModalButton";
import CustomModal from "./CustomModal";
import SimpleTextInput from "../Input/SimpleTextInput";
import { DeleteCustomer, RegisterCustomer, UpdateCustomer } from "../../Https";
import { fetchCustomers } from "../../store/Slices/CustomerSlice";
import { useDispatch } from "react-redux";
import ModalUpdateButton from "../Buttons/ModalUpdateButton";
import ModalDeleteButton from "../Buttons/ModalDeleteButton";

const EditCustomer = ({ open, setOpen, customerdata }) => {
  const [ID, setID] = useState("");
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [Cnic, setCnic] = useState("");
  const [Total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const setData = () => {
    const curData = customerdata[0];
    setID(curData._id);
    setName(curData.name);
    setAddress(curData.address);
    setContact(curData.contact);
    setCnic(curData.cnic);
  };

  const onUpdate = async (e) => {
    e.preventDefault();
    const custInfo = {
      name: Name,
      address: Address,
      cnic: Cnic,
      contact: Contact,
    };
    try {
      const response = await UpdateCustomer(ID, custInfo);
      if (response.status === 404) {
        alert("Customer not found...");
      } else if (response.status === 200) {
        alert("Customer Successfully Updated...");
        dispatch(fetchCustomers());
      }
    } catch (err) {
      console.log("Error occured...!");
    }
    setOpen(false);
  };
  const onDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await DeleteCustomer(ID);
      if (response.status === 400) alert("Bad Request");
      else if (response.status === 201) {
        alert("Customer successfully deleted...");
        dispatch(fetchCustomers());
      }
    } catch (err) {
      console.log("Error Occured:", err.message);
    }
    setOpen(false);
  };

  useEffect(() => {
    setData();
  }, []);

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
      <div className="flex w-full justify-between mt-[20px] px-[20px]">
        <ModalUpdateButton onClick={onUpdate} />
        <ModalDeleteButton onClick={onDelete} />
      </div>
    </CustomModal>
  );
};

export default EditCustomer;

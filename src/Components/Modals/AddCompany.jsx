import { useState } from "react";
// Inputs
import TextInput from "../Input/TextInput";
// Icons
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import PinDropIcon from "@mui/icons-material/PinDrop";
import DescriptionIcon from "@mui/icons-material/Description";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import CustomModal from "./CustomModal";
import TextField from "@mui/material/TextField";
import SimpleTextInput from "../Input/SimpleTextInput";
import ModalButton from "../Buttons/ModalButton";
import ModalBottomLine from "./ModalBottomLine";
import { AddNewCompany } from "../../Https";
import { fetchCompanies } from "../../store/Slices/CompanySlice";
import { useDispatch } from "react-redux";

export default function AddCompany({ open, setOpen }) {
  // States
  const [Username, setUsername] = useState("");
  const [Address, setAddress] = useState("");
  const [Desc, setDesc] = useState("");
  const [Contact, setContact] = useState("");
  // redux toolkit
  const dispatch = useDispatch();
  // Functions
  const onSubmit = async (e) => {
    e.preventDefault();
    const CompanyInfo = {
      name: Username,
      address: Address,
      desc: Desc,
      contact: Contact,
    };
    try {
      const response = await AddNewCompany(CompanyInfo);
      if (response.status === 201) {
        dispatch(fetchCompanies());
        alert("Company Successfully Added...");
      }
    } catch (err) {
      console.log("Error occured: ");
    }
    setOpen(false);
  };

  return (
    <CustomModal title={"Add New Company"} open={open} setOpen={setOpen}>
      <form className="flex flex-col justify-center items-center">
        <SimpleTextInput
          label="Enter Name"
          placeholder="Enter Name"
          type="text"
          id="username"
          name="username"
          value={Username}
          setValue={setUsername}
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
          label="Enter Description"
          placeholder="Enter Description"
          type="text"
          id="description"
          name="description"
          value={Desc}
          setValue={setDesc}
        />
        <ModalBottomLine />
      </form>
      <div className="flex justify-center items-center">
        <ModalButton title={"add new company"} onClick={onSubmit} />
      </div>
    </CustomModal>
  );
}

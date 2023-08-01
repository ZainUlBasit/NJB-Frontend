import React, { useState } from "react";
import { NavComp } from "./NavComp";
import AdminNavButton from "./AdminNavButton";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddCustomerAdvance from "../Modals/AddCustomerAdvance";
const CashPaymentNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavComp
      isAct={false}
      className={false ? "isActiveStyling" : "isNotActiveStyling"}
    >
      <div className="NavWrapper">
        <AdminNavButton
          title={"Company Payment"}
          type={"link"}
          BIcon={BusinessIcon}
          width={"180px"}
          link={"/company-payment"}
        />
        <AdminNavButton
          title={"Customer Payment"}
          type={"link"}
          BIcon={PersonIcon}
          width={"180px"}
          link={"/customer-payment"}
        />
        <AdminNavButton
          title={"Add Advance"}
          type={"modal"}
          BIcon={AddCardIcon}
          width={"180px"}
          setOpen={setOpen}
        />
      </div>
      {open ? <AddCustomerAdvance open={open} setOpen={setOpen} /> : <></>}
    </NavComp>
  );
};

export default CashPaymentNav;

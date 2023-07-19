import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavComp } from "./NavComp";
import AdminNavButton from "./AdminNavButton";
import InfoIcon from "@mui/icons-material/Info";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AddCompany from "../Modals/AddCompany";

const CustomerNav = () => {
  const isActive_ = useSelector((state) => state.SideMenuReducer.ActiveState);
  const [Open, setOpen] = useState(false);
  return (
    <NavComp
      isAct={isActive_}
      className={isActive_ ? "isActiveStyling" : "isNotActiveStyling"}
    >
      <div className="NavWrapper">
        {/* <AdminNavButton
          title={"Customer Info"}
          type={"link"}
          BIcon={DomainAddIcon}
          width={"170px"}
          setOpen={setOpen}
        /> */}
        <AdminNavButton
          title={"Customer Info"}
          type={"link"}
          link={"/customer_info"}
          BIcon={MenuBookIcon}
          width={"170px"}
        />
        <AdminNavButton
          title={"Add New Bill"}
          type={"link"}
          link={"/add_new_bill"}
          BIcon={MenuBookIcon}
          width={"170px"}
        />
        <AdminNavButton
          title={"Customer Kata"}
          type={"link"}
          link={"/customer_kata"}
          BIcon={MenuBookIcon}
          width={"170px"}
        />
        <AdminNavButton
          title={"Item Return"}
          type={"link"}
          link={"/customer_return"}
          BIcon={MenuBookIcon}
          width={"170px"}
        />
        <AdminNavButton
          title={"Customer Ledger"}
          type={"link"}
          link={"/customer_ledger"}
          BIcon={RequestQuoteIcon}
          width={"170px"}
        />
      </div>
      {Open ? <AddCompany setOpen={setOpen} open={Open} /> : <></>}
    </NavComp>
  );
};

export default CustomerNav;

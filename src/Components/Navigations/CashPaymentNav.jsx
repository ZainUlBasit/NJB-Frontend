import React from "react";
import { NavComp } from "./NavComp";
import AdminNavButton from "./AdminNavButton";
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';
const CashPaymentNav = () => {
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
      </div>
    </NavComp>
  );
};

export default CashPaymentNav;

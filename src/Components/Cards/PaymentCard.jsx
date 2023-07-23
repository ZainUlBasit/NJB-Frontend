import React, { useState } from "react";
import AddPayment from "../Modals/AddPayment";

const PaymentCard = ({ title, setOpen }) => {
  return (
    <>
      {/* Inenr Wrapper */}
      <div className="w-[90%] bg-[#032248] text-white rounded-t-[10px]">
        {/* title */}
        <div className="text-center py-[15px] font-bold font-[raleway] text-[1.6rem] uppercase border-b-[2px]">
          {`${title} payment`}
        </div>
        {/* middle bar */}
        <div className="flex justify-between items-center px-[10px] py-[10px] border-b-[2px] border-t-[1px] mt-[5px]">
          <div className="font-bold font-[raleway] text-[1.5rem]">{`${title} Detail`}</div>
          <button
            className="w-[40px] h-[40px] flex justify-center items-center bg-white text-[#032248] rounded-[100%] text-[1.8rem] font-bold hover:bg-[#C0C0C0]"
            onClick={() => setOpen(true)}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;

import React, { useState } from "react";
import DatePickerComp from "../DatePicker/DatePicker";

const ReportBanner = ({
  title,
  OpenTable,
  setOpenTable,
  FromDate,
  ToDate,
  setFromDate,
  setToDate,
}) => {
  return (
    <>
      <div className="w-[100%] flex justify-center">
        <div className="w-[90%] bg-[#032248] rounded-t-[10px]">
          {/* Header */}
          <div className="w-full text-white text-center font-[raleway] font-bold text-[1.8rem] py-[15px] border-b-[3px] border-b-white uppercase">
            {title}
          </div>
          {/* Body */}
          <div className="pr-[10px] pl-[10px] font-[raleway] flex w-[100%] justify-between mt-[20px] pb-[28px] sm:flex-wrap md:flex-nowrap border-b-[2px] border-b-white">
            <DatePickerComp
              title={"From Date"}
              value={FromDate}
              onChange={setFromDate}
            />
            <DatePickerComp
              title={"To Date"}
              value={ToDate}
              onChange={setToDate}
            />
          </div>
          {/* Footer */}
          <div className="w-full flex justify-center py-[20px]">
            <button
              className="border-white border-[2px] px-[15px] py-[10px] text-[#032248] hover:text-white font-[raleway] font-bold uppercase bg-white hover:bg-[#032248] hover:rounded-[5px] transition-all duration-700"
              onClick={() => setOpenTable(!OpenTable)}
            >
              {OpenTable ? "Hide Report" : "Show Report"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportBanner;

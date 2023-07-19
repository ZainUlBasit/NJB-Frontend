import React, { useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import ExpenseNav from "../../Components/Navigations/ExpenseNav";
import ReportBanner from "../../Components/Banners/ReportBanner";
import TableComp from "../../Components/Tables/TableComponent";
import { ExpenseColumns } from "../../assets/Columns/ExpenseColumns";

const ReportHome = () => {
  const [OpenTable, setOpenTable] = useState(false);
  const [FromDate, setFromDate] = useState(new Date());
  const [ToDate, setToDate] = useState(new Date());
  return (
    <>
      <Navbar />
      <ExpenseNav />
      <ReportBanner
        title={"Report Home"}
        OpenTable={OpenTable}
        setOpenTable={setOpenTable}
        FromDate={FromDate}
        setFromDate={setFromDate}
        ToDate={ToDate}
        setToDate={setToDate}
      />
      {OpenTable ? (
        <TableComp
          title="Home Report"
          rows={[
            {
              date: "27/12/2023",
              desc: "Nothing But Something",
              expense: 20000,
            },
          ]}
          columns={ExpenseColumns}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default ReportHome;

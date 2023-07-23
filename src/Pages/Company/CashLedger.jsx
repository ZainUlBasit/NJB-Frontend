import React, { useEffect, useState } from "react";
import moment from "moment";

const CashLedger = ({ id, fromdate, todate }) => {
  return (
    <>
      <div>Cash Ledger</div>
      <div>{`id: ${id}`}</div>
      <div>{`From Date: ${fromdate}`}</div>
      <div>{`To Date: ${todate}`}</div>
    </>
  );
};

export default CashLedger;

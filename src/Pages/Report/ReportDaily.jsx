import React, { useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import ExpenseNav from "../../Components/Navigations/ExpenseNav";
import DailyButton from "../../Components/Buttons/DailyButton";
import SteelDaily from "./SteelDaily";
import CementDaily from "./CementDaily";

const ReportDaily = () => {
  const [ShowSteel, setShowSteel] = useState(true);
  const [ShowCement, setShowCement] = useState(false);
  const toggleSteel = () => {
    if (!ShowSteel) {
      setShowSteel(true);
      setShowCement(false);
    }
  };
  const toggleCement = () => {
    if (!ShowCement) {
      setShowSteel(false);
      setShowCement(true);
    }
  };
  return (
    <>
      <Navbar />
      <ExpenseNav />
      <div className="w-full flex justify-center">
        <DailyButton title={"Show Steel"} onClick={toggleSteel} />
        <DailyButton title={"Show Cement"} onClick={toggleCement} />
      </div>
      {ShowSteel ? <SteelDaily /> : ShowCement ? <CementDaily /> : <></>}
    </>
  );
};

export default ReportDaily;

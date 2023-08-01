import React, { useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import ExpenseNav from "../../Components/Navigations/ExpenseNav";
import DailyButton from "../../Components/Buttons/DailyButton";
import SteelDaily from "./SteelDaily";
import CementDaily from "./CementDaily";
import { GetAllCustomerTransaction } from "../../Https";
import { useEffect } from "react";
import moment from "moment";

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

  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const GetData = async () => {
    setLoading(true);
    let response = await GetAllCustomerTransaction();
    response = response.data;
    // console.log(response);
    response = response.map((re) => ({
      ...re,
      date: moment(re.date).format("DD/MM/YYYY"),
    }));
    setData(response);
    setLoading(false);
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      <Navbar />
      <ExpenseNav />
      <div className="w-full flex justify-center mb-[20px]">
        <DailyButton title={"Show Steel"} onClick={toggleSteel} />
        <DailyButton title={"Show Cement"} onClick={toggleCement} />
      </div>
      {ShowSteel ? (
        <SteelDaily data={Data} />
      ) : ShowCement ? (
        <CementDaily data={Data} />
      ) : (
        <></>
      )}
    </>
  );
};

export default ReportDaily;

import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import TableComp from "../../Components/Tables/TableComponent";
import { DailyColumns } from "../../assets/Columns/DailyColumns";
import CalculatedInfo from "./CalculatedInfo";
import DataLoader from "../../Components/Loader/DataLoader";

const SteelDaily = ({ data }) => {
  const [SteelData, setSteelData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const SetData = () => {
    setLoading(true);
    setSteelData(
      data.filter((dt) => dt.desc === "Steel" || dt.desc === "steel")
    );
    setLoading(false);
  };
  useEffect(() => {
    SetData();
  }, [data]);

  const TotalAmount = useMemo(() => {
    return SteelData.reduce((total, item) => item.amount + total, 0);
  }, [SteelData]);

  const TotalQty = useMemo(() => {
    return SteelData.reduce((total, item) => item.qty + total, 0);
  }, [SteelData]);

  const TotalPurchase = useMemo(() => {
    return SteelData.reduce(
      (total, item) => item.purchase * Number(item.qty) + total,
      0
    );
  }, [SteelData]);

  return (
    <>
      <TableComp
        title={"Steel Detail"}
        rows={SteelData}
        columns={DailyColumns}
      />
      <CalculatedInfo
        sale={TotalAmount}
        purchase={TotalPurchase}
        qty={TotalQty}
      />
    </>
  );
};

export default SteelDaily;

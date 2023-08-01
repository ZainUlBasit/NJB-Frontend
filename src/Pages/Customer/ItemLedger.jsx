import React from "react";
import { useState } from "react";
import { GetCustomerReturn, GetCustomerTransaction } from "../../Https";
import { useEffect } from "react";
import moment from "moment";
import DataLoader from "../../Components/Loader/DataLoader";
import TableComp from "../../Components/Tables/TableComponent";
import { CustomerItemLedgerColumns } from "../../assets/Columns/CustomerItemLedgerColumns";
import { fetchCustomers } from "../../store/Slices/CustomerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import CalculationInfo from "./CalculationInfo";

const ItemLedger = ({ id, fromdate, todate }) => {
  const [Data, setData] = useState([]);
  const [ReturnData, setReturnData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const Customers = useSelector((state) => state.CustomerReducer.data);
  const dispatch = useDispatch();
  const GetData = async () => {
    setLoading(true);
    let response = await GetCustomerTransaction({
      id,
      fromdate,
      todate,
    });
    response = response.data;
    response = response.map((re) => ({
      ...re,
      date: moment(re.date).format("DD/MM/YYYY"),
    }));
    setData(response);
    response = await GetCustomerReturn({ id, fromdate, todate });
    response = response.data;
    response = response.map((re) => ({
      ...re,
      date: moment(re.date).format("DD/MM/YYYY"),
    }));
    setReturnData(response);
    setLoading(false);
  };

  const GetReturnAccount = useMemo(() => {
    return ReturnData.reduce((total, item) => item.amount + total, 0);
  }, [ReturnData]);

  const [Total, setTotal] = useState(0);
  const [Discount, setDiscount] = useState(0);
  const [Paid, setPaid] = useState(0);
  const [Remaining, setRemaining] = useState(0);

  const GetAccounts = () => {
    const curCustomer = Customers.filter((cus) => cus._id === id);
    setTotal(curCustomer[0].total);
    setDiscount(curCustomer[0].discount);
    setPaid(curCustomer[0].paid);
    setRemaining(curCustomer[0].remaining);
  };
  useEffect(() => {
    GetData();
    dispatch(fetchCustomers());
    GetAccounts();
  }, [id, fromdate, todate]);
  return (
    <>
      {Loading ? (
        <DataLoader />
      ) : (
        <>
          <TableComp
            title="Item Ledger"
            rows={Data}
            columns={CustomerItemLedgerColumns}
          />
          <TableComp
            title="Return Detail"
            rows={ReturnData}
            columns={CustomerItemLedgerColumns}
          />
          <CalculationInfo
            Total={Total}
            Paid={Paid}
            Return={GetReturnAccount}
            Discount={Discount}
            Remaining={Remaining}
          />
        </>
      )}
    </>
  );
};

export default ItemLedger;

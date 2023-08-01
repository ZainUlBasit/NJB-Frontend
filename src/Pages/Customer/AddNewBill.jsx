import React, { useEffect, useState } from "react";
import SimpleTextInput from "../../Components/Input/SimpleTextInput";
import BillTable from "../../Components/Tables/BillTable";
import AddNewBillItem from "../../Components/Modals/AddNewBillItem";
import Navbar from "../../Components/NavBar/NavBar";
import CustomerNav from "../../Components/Navigations/CustomerNav";
import SimpleSelectComp from "../../Components/Select/SimpleSelectComp";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../store/Slices/CustomerSlice";
import {
  AddCustomerTransaction,
  GetCurrentBill,
  UpdateCurrentBill,
  UpdateCustomerTotal,
} from "../../Https";
import { fetchItems } from "../../store/Slices/ItemSlice";

import easyinvoice from "easyinvoice";
import moment from "moment";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Testing from "../Testing";

const AddNewBill = () => {
  const [CurrentCustomer, setCurrentCustomer] = useState("");
  const [Date, setDate] = useState();
  const [Discount, setDiscount] = useState(0);
  const [Total, setTotal] = useState(0);
  const [Open, setOpen] = useState(false);
  const [BillDetail, setBillDetail] = useState([]);
  const [CurrentAdvance, setCurrentAdvance] = useState(0);
  const [CurrentRemaining, setCurrentRemaining] = useState(0);
  const [LoadingCharges, setLoadingCharges] = useState(0);
  const [DeliveryCharges, setDeliveryCharges] = useState(0);
  const [Paid, setPaid] = useState(0);
  const [Advance, setAdvance] = useState(0);
  const [CurrentBillNo, setCurrentBillNo] = useState("");
  const [CurrentName, setCurrentName] = useState("");
  const [CurrentAddress, setCurrentAddress] = useState("");
  const [CurrentContact, setCurrentContact] = useState("");

  const [BillPrinted, setBillPrinted] = useState(false);

  let Items = useSelector((state) => state.ItemReducer.data);
  const Customers = useSelector((state) => state.CustomerReducer.data);
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (Date === undefined) {
      alert("Select Date Please");
    } else if (BillPrinted === false) {
      alert("Please Print Bill First");
    } else {
      // Get Current Bill No
      let curBillNo = await GetCurrentBill();
      curBillNo = curBillNo.data;
      // Add Data to bill item
      const newBillDetail = BillDetail.map((bd) => {
        return {
          ...bd,
          customerid: CurrentCustomer,
          date: Date,
          bill: curBillNo,
        };
      });
      try {
        newBillDetail.map(async (nb) => {
          const curItem = Items.filter((it) => it.name === nb.name);
          const purchase = curItem[0].purchasee;
          const desc = curItem[0].desc;

          await AddCustomerTransaction({
            ...nb,
            purchase: purchase,
            desc: desc,
          });
        });
        await UpdateCustomerTotal(CurrentCustomer, {
          total: Total + Number(LoadingCharges) + Number(DeliveryCharges),
          discount: Discount,
          advance: Advance,
          paid: Paid,
        });
        await UpdateCurrentBill();
        alert("Bill Successfully added...!")
        setBillPrinted(false);
        setBillDetail([]);
        setDiscount(0);
      } catch (err) {
        alert("Error Occured...");
      }
    }
  };

  const getTotal = () => {
    setTotal(
      BillDetail.map((item) => item.amount).reduce((sum, i) => sum + i, 0)
    );
  };

  useEffect(() => {
    getTotal();
    Customers.map((cus) => {
      if (cus._id === CurrentCustomer) {
        setCurrentName(cus.name);
        setCurrentAddress(cus.address);
        setCurrentContact(cus.contact);
      }
    });
  }, [BillDetail]);

  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(fetchItems());
    const SetBillNoFunc = async () => {
      let curBillNo = await GetCurrentBill();
      curBillNo = curBillNo.data;
      setCurrentBillNo(curBillNo);
    };
    SetBillNoFunc();
  }, []);

  useEffect(() => {
    const SetCurrentAdvance = () => {
      let cCustomer = Customers.filter((cust) => cust._id === CurrentCustomer);
      cCustomer = cCustomer[0];
      setCurrentAdvance(cCustomer.advance);
      setCurrentRemaining(cCustomer.remaining);
    };
    if (CurrentCustomer != "") SetCurrentAdvance();
  }, [CurrentCustomer]);

  // ***************************
  // Print Invoice Method
  // ***************************
  const setData = () => {
    let taxRate;
    if (Discount === 0) taxRate = -((1 / Total) * 100);
    else taxRate = -((Discount / Total) * 100);
    return BillDetail.map((item) => {
      return {
        quantity: item.qty,
        description: item.name,
        "tax-rate": taxRate,
        price: item.price,
      };
    });
  };
  const GenerateBill = async (CurrBillNo) => {
    const formatedData = setData();
    let cName, cAddress, cId, cContact;
    Customers.map((cus) => {
      if (cus._id === CurrentCustomer) {
        cName = cus.name;
        cAddress = cus.address;
        cId = cus._id;
        cContact = cus.contact;
      }
    });
    // ==================================
    // Generating Invoice
    // ==================================
    let data = {
      customize: {},
      images: {
        logo: "https://firebasestorage.googleapis.com/v0/b/wfw-expert-system-cff9e.appspot.com/o/images%2Fmain_logo.png?alt=media&token=411846c3-3d86-4f2e-9055-53f9811ab865",
      },
      // Company data
      sender: {
        company: "Niamat Jan & Brothers",
        zip: "Steel and Cement Dealer",
        city: "",
        country: "Charsadda, KPK",
      },
      // Your recipient
      client: {
        company: cName,
        address: cContact,
        zip: cAddress,
        city: "Pakistan",
      },
      information: {
        // Invoice number
        number: CurrBillNo,
        // Invoice data
        date: moment(Date).format("DD/MM/YYYY"),
        // Invoice due date
        "due-date": "------",
      },
      // The products you would like to see on your invoice
      // Total values are being calculated automatically
      products: formatedData,
      // The message you would like to display on the bottom of your invoice
      "bottom-notice": `Developed By: XEE Tech, Email: zainulbasit486@gmail.com`,
      // Settings to customize your invoice
      settings: {},
      translate: {
        subtotal: "Current Total", // Defaults to 'Subtotal'
        products: "Items", // Defaults to 'Products'
        total: "Grand Total", // Defaults to 'Total'
        vat: "Discount", // Defaults to 'vat'
      },
    };
    // ==========================================
    // Call for generating Invoice
    // ==========================================
    easyinvoice.createInvoice(data, function (result) {
      easyinvoice.download("invoice.pdf");
    });
  };

  return (
    <>
      <Navbar />
      <CustomerNav />
      <div className="w-full flex justify-center mb-[20px]">
        {/* Inner Wrapper */}
        <div className="bg-[#032248] w-[90%] text-white rounded-t-[10px]">
          {/* Customer Detail */}
          <div className="w-full select-none">
            <div className="w-full text-center py-[15px] font-[raleway] font-bold uppercase text-[1.8rem]">
              Customer Detail
            </div>
            <div className="w-full bg-white h-[2px]"></div>
            <div className="w-[100%] flex flex-wrap flex-row justify-center items-center bg-white border-x-[#032248] border-[2px] pt-[20px]">
              <div className="w-[90%] min-w-[300px] flex justify-center">
                <SimpleSelectComp
                  value={CurrentCustomer}
                  setValue={setCurrentCustomer}
                  label={"Select Customer"}
                  data={Customers}
                />
              </div>
            </div>
          </div>
          {/* Bill Detail */}
          {CurrentCustomer !== "" ? (
            <>
              <div className="w-full flex justify-center items-center border-b-[2px] border-b-white">
                <div className="py-[20px] font-[raleway] font-bold text-[1.3rem] select-none">
                  Advance Balance: {CurrentAdvance}
                </div>
              </div>
              <div className="py-[10px]">
                <div className="flex justify-between items-center px-[10px] border-b-[2px] border-b-white pb-[10px] pt-[5px]">
                  <div className="font-bold font-[raleway] text-[1.5rem] select-none">
                    Bill Detail
                  </div>
                  <div>
                    <button
                      className="bg-white text-[#032248] rounded-[999px] h-[40px] w-[40px] font-bold font-[raleway] text-[2.5rem] hover:bg-[#032248] hover:text-white border-[2px] border-white flex justify-center items-center transition-all duration-700 select-none"
                      onClick={() => setOpen(true)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <BillTable rows={BillDetail} />
                  {/* Main Block */}
                  <div className="flex justify-between items-center">
                    {/* left */}
                    <div className="flex flex-col justify-center items-center pl-[20px]">
                      <button
                        className="bg-white text-[#032248] px-[20px] mobbtn:px-[14px] py-[10px] font-bold font-[raleway] text-[1.2rem] border-[2px] border-white hover:rounded-[8px] hover:bg-[#032248] hover:text-white transition-all duration-700 select-none my-[5px]"
                        onClick={onSubmit}
                      >
                        Add Bill
                      </button>
                      <PDFDownloadLink
                        document={
                          <Testing
                            Data={BillDetail}
                            cTotal={Total}
                            cLoading={LoadingCharges}
                            cDelivery={DeliveryCharges}
                            cDiscount={Discount}
                            cGrand={
                              Number(Total) -
                              Number(Discount) +
                              Number(LoadingCharges) +
                              Number(DeliveryCharges)
                            }
                            cPaid={Paid}
                            bBillNo={CurrentBillNo}
                            bDate={Date}
                            cName={CurrentName}
                            cAddress={CurrentAddress}
                            cContact={CurrentContact}
                          />
                        }
                        fileName={`${CurrentBillNo}`}
                      >
                        <button
                          className="bg-white text-[#032248] px-[20px] mobbtn:px-[14px] py-[10px] font-bold font-[raleway] text-[1.2rem] border-[2px] border-white hover:rounded-[8px] hover:bg-[#032248] hover:text-white transition-all duration-700 select-none my-[5px]"
                          onClick={() => setBillPrinted(true)}
                        >
                          Print
                        </button>
                      </PDFDownloadLink>
                    </div>
                    {/* Right */}
                    <div className="flex flex-col p-[10px] pt-[15px]">
                      {/* Date */}
                      <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none justify-end">
                        {/* <div className="w-[118px] pr-[5px] text-right">Total:</div> */}
                        <input
                          type="date"
                          name="date"
                          id="date"
                          value={Date}
                          onChange={(e) => setDate(e.target.value)}
                          className="text-[#032248] font-[raleway] font-bold text-[1.2rem] w-[180px]"
                        />
                      </div>
                      {/* Current Bill Total */}
                      <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none">
                        <div className="w-[118px] pr-[5px] text-right">
                          Total:
                        </div>
                        <div className="w-[100px] bg-white text-[#032248]">
                          {Total}
                        </div>
                      </div>
                      {/* Loading Charges */}
                      <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none">
                        <div className="w-[118px] pr-[5px] text-right">
                          Loading:
                        </div>
                        <input
                          type="number"
                          name="loadingcharges"
                          id="loadingcharges"
                          value={LoadingCharges}
                          onChange={(e) => {
                            if (e.target.value === "") setLoadingCharges(0);
                            else setLoadingCharges(e.target.value);
                          }}
                          className="text-[#032248] font-[raleway] font-bold text-[1.2rem] w-[100px]"
                        />
                      </div>
                      {/* Delivery Charges */}
                      <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none">
                        <div className="w-[118px] pr-[5px] text-right">
                          Delivery:
                        </div>
                        <input
                          type="number"
                          name="deliverycharges"
                          id="deliverycharges"
                          value={DeliveryCharges}
                          onChange={(e) => {
                            if (e.target.value === "") setDeliveryCharges(0);
                            else setDeliveryCharges(e.target.value);
                          }}
                          className="text-[#032248] font-[raleway] font-bold text-[1.2rem] w-[100px]"
                        />
                      </div>
                      {/* Discount */}
                      <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none">
                        <div className="w-[118px] pr-[5px] text-right">
                          Discount:
                        </div>
                        <input
                          type="number"
                          name="discount"
                          id="discount"
                          value={Discount}
                          onChange={(e) => {
                            if (e.target.value === "") setDiscount(0);
                            else setDiscount(e.target.value);
                          }}
                          className="text-[#032248] font-[raleway] font-bold text-[1.2rem] w-[100px]"
                        />
                      </div>
                      {/* Grand Total */}
                      <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none">
                        <div className="w-[118px] pr-[5px] text-right">
                          Grand Total:
                        </div>
                        <div className="w-[100px] bg-white text-[#032248]">
                          {Number(Total) -
                            Number(Discount) +
                            Number(LoadingCharges) +
                            Number(DeliveryCharges)}
                        </div>
                      </div>
                      {/* Payment from Advance Amount (Currrent Customer) */}
                      <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none">
                        <div className="w-[118px] pr-[5px] text-right">
                          Advance:
                        </div>
                        <input
                          type="number"
                          name="advance"
                          id="advance"
                          value={Advance}
                          onChange={(e) => {
                            if (e.target.value === "") setAdvance(0);
                            else setAdvance(e.target.value);
                          }}
                          className="text-[#032248] font-[raleway] font-bold text-[1.2rem] w-[100px]"
                        />
                      </div>
                      {/* Paid Amount (Currrent Bill) */}
                      <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none">
                        <div className="w-[118px] pr-[5px] text-right">
                          Paid:
                        </div>
                        <input
                          type="number"
                          name="paid"
                          id="paid"
                          value={Paid}
                          onChange={(e) => {
                            if (e.target.value === "") setPaid(0);
                            else setPaid(e.target.value);
                          }}
                          className="text-[#032248] font-[raleway] font-bold text-[1.2rem] w-[100px]"
                        />
                      </div>
                      {/* Current Arears/Balance */}
                      {CurrentCustomer === "64c5fdffcaaf8f07968f3fb3" ? (
                        <></>
                      ) : (
                        <div className="flex w-[220px] text-[1.2rem] font-[raleway] font-bold my-[5px] select-none">
                          <div className="w-[118px] pr-[5px] text-right">
                            Balance:
                          </div>
                          <div className="w-[100px] bg-white text-[#032248]">
                            {CurrentRemaining}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {Open ? (
                  <AddNewBillItem
                    open={Open}
                    setOpen={setOpen}
                    BillDetail={BillDetail}
                    setBillDetail={setBillDetail}
                  />
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default AddNewBill;

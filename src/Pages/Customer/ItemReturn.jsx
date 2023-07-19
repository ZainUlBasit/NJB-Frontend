import React, { useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import CustomerNav from "../../Components/Navigations/CustomerNav";
import SimpleSelectComp from "../../Components/Select/SimpleSelectComp";
import BillTable from "../../Components/Tables/BillTable";
import AddNewBillItem from "../../Components/Modals/AddNewBillItem";

const ItemReturn = () => {
  const [Total, setTotal] = useState(0);
  const [Discount, setDiscount] = useState(0);
  const [Open, setOpen] = useState(false);
  const [CurrentCustomer, setCurrentCustomer] = useState("");
  return (
    <>
      <Navbar />
      <CustomerNav />
      <div className="w-full flex justify-center mb-[20px]">
        {/* Inner Wrapper */}
        <div className="bg-[#032248] w-[90%] text-white rounded-t-[10px]">
          {/* Customer Detail */}
          <div className="w-full">
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
                  data={[{ name: "Ishaq" }]}
                />
              </div>
            </div>
          </div>
          {/* Bill Detail */}
          <div className="py-[10px]">
            <div className="flex justify-between items-center px-[10px] border-b-[2px] border-b-white pb-[10px] pt-[5px]">
              <div className="font-bold font-[raleway] text-[1.5rem]">
                Bill Detail
              </div>
              <div>
                <button
                  className="bg-white text-[#032248] rounded-[999px] h-[40px] w-[40px] font-bold font-[raleway] text-[2.5rem] hover:bg-[#032248] hover:text-white border-[2px] border-white flex justify-center items-center transition-all duration-700"
                  onClick={() => setOpen(true)}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <BillTable
                rows={[
                  {
                    itemname: "1/2 steel",
                    itemqty: 100,
                    itemprice: 20,
                    totalamount: 2000,
                  },
                ]}
                setTotal={setTotal}
              />
              {/* Main Block */}
              <div className="flex justify-between items-center">
                {/* left */}
                <div className="flex justify-center items-center pl-[20px]">
                  <button className="bg-white text-[#032248] px-[10px] py-[8px] font-bold font-[raleway] text-[1.2rem] border-[2px] border-white hover:rounded-[8px] hover:bg-[#032248] hover:text-white transition-all duration-700">
                    Add Bill
                  </button>
                </div>
                {/* Right */}
                <div className="flex flex-col p-[10px] pt-[15px]">
                  {/* Current */}
                  <div className="flex w-[200px] text-[1.2rem] font-[raleway] font-bold">
                    <div className="w-[118px] pr-[5px] text-right">Total:</div>
                    <div className="w-[80px]">1000/-</div>
                  </div>
                  {/* Discount */}
                  <div className="flex w-[200px] text-[1.2rem] font-[raleway] font-bold">
                    <div className="w-[118px] pr-[5px] text-right">
                      Discount:
                    </div>
                    <input
                      type="number"
                      name="discount"
                      id="discount"
                      value={Discount}
                      onChange={(e) => setDiscount(e.target.value)}
                      className="text-[#032248] font-[raleway] font-bold text-[1.2rem] w-[80px]"
                    />
                  </div>
                  {/* Grand Total */}
                  <div className="flex w-[200px] text-[1.2rem] font-[raleway] font-bold">
                    <div className="w-[118px] pr-[5px] text-right">
                      Grand Total:
                    </div>
                    <div className="w-[80px]">1000/-</div>
                  </div>
                </div>
              </div>
            </div>
            {Open ? <AddNewBillItem open={Open} setOpen={setOpen} /> : <></>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemReturn;

import React, { useState } from "react";
import CustomModal from "./CustomModal";
import SimpleSelectComp from "../Select/SimpleSelectComp";
import SimpleTextInput from "../Input/SimpleTextInput";

const AddNewBillItem = ({ open, setOpen }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const [ItemName, setItemName] = useState("");
  const [ItemQty, setItemQty] = useState("");
  const [ItemPrice, setItemPrice] = useState("");
  const [Total, setTotal] = useState(0);
  return (
    <CustomModal title={"Add New Item"} open={open} setOpen={setOpen}>
      <form
        className="flex flex-col justify-center items-center pt-[10px]"
        onSubmit={onSubmit}
      >
        <SimpleSelectComp
          value={ItemName}
          setValue={setItemName}
          label={"Select Item"}
          data={[{ itemname: "1/2 steel" }]}
        />
        <SimpleTextInput
          label="Enter Item Quantity"
          placeholder="Enter Item Quantity"
          type="number"
          id="itemqty"
          name="itemqty"
          value={ItemQty}
          setValue={setItemQty}
        />
        <SimpleTextInput
          label="Enter Item Price"
          placeholder="Enter Item Price"
          type="number"
          id="itemprice"
          name="itemprice"
          value={ItemPrice}
          setValue={setItemPrice}
        />
        <SimpleTextInput
          label="Total Amount"
          placeholder="Enter Item Total"
          type="number"
          id="total"
          name="total"
          value={Total}
          setValue={setTotal}
        />
      </form>
    </CustomModal>
  );
};

export default AddNewBillItem;

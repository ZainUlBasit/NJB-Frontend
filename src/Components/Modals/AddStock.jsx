import React, { useState } from "react";
import CustomModal from "./CustomModal";
import SimpleSelectComp from "../Select/SimpleSelectComp";
import SimpleTextInput from "../Input/SimpleTextInput";
import ModalBottomLine from "./ModalBottomLine";
import ModalButton from "../Buttons/ModalButton";

const AddStock = ({ open, setOpen }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  const [ItemName, setItemName] = useState("");
  const [ItemQty, setItemQty] = useState("");
  const [ItemDesc, setItemDesc] = useState("");
  const [ItemInvoice, setItemInvoice] = useState("");
  const [ItemTruck, setItemTruck] = useState("");
  return (
    <CustomModal title={"Add Stock"} open={open} setOpen={setOpen}>
      <form
        className="flex flex-col justify-center items-center pt-[10px]"
        onSubmit={onSubmit}
      >
        <SimpleSelectComp
          value={ItemName}
          setValue={setItemName}
          label={"Select Item"}
          data={[{ name: "Ishaq" }]}
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
          label="Enter Item Description"
          placeholder="Enter Item Description"
          type="text"
          id="itemdesc"
          name="itemdesc"
          value={ItemDesc}
          setValue={setItemDesc}
        />
        <SimpleTextInput
          label="Enter Item Invoice No."
          placeholder="Enter Item Invoice No."
          type="text"
          id="iteminvoice"
          name="iteminvoice"
          value={ItemInvoice}
          setValue={setItemInvoice}
        />
        <SimpleTextInput
          label="Enter Item Truck No."
          placeholder="Enter Item Truck No."
          type="text"
          id="itemtruck"
          name="itemtruck"
          value={ItemTruck}
          setValue={setItemTruck}
        />
        <ModalBottomLine />
        <ModalButton title={"Add Stock"}/>
      </form>
    </CustomModal>
  );
};

export default AddStock;

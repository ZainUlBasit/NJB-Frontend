import React, { useState } from "react";
import CustomModal from "./CustomModal";
import SimpleSelectComp from "../Select/SimpleSelectComp";
import SimpleTextInput from "../Input/SimpleTextInput";
import ModalBottomLine from "./ModalBottomLine";
import ModalButton from "../Buttons/ModalButton";

const AddExpense = ({ open, setOpen }) => {
  // States
  const [ExpenseType, setExpenseType] = useState("");
  const [CurDate, setCurDate] = useState(new Date());
  const [Desc, setDesc] = useState("");
  const [Expense, setExpense] = useState("");
  // Functions
  const onSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
  };
  return (
    <CustomModal title={"Add Expense"} open={open} setOpen={setOpen}>
      <form
        className="flex flex-col justify-center items-center pt-[10px]"
        onSubmit={onSubmit}
      >
        <SimpleSelectComp
          value={ExpenseType}
          setValue={setExpenseType}
          label={"Select Expense Type"}
          data={[{ name: "Shop" }, { name: "Home" }]}
        />
        <SimpleTextInput
          label="Select Date"
          placeholder="Select Date"
          type="date"
          id="date"
          name="date"
          value={CurDate}
          setValue={setCurDate}
        />
        <SimpleTextInput
          label="Enter Description"
          placeholder="Enter Description"
          type="text"
          id="desc"
          name="desc"
          value={Desc}
          setValue={setDesc}
        />
        <SimpleTextInput
          label="Enter Expense"
          placeholder="Enter Expense"
          type="number"
          id="expense"
          name="expense"
          value={Expense}
          setValue={setExpense}
        />
        <ModalBottomLine />
        <ModalButton title={"Add Expense"} />
      </form>
    </CustomModal>
  );
};

export default AddExpense;

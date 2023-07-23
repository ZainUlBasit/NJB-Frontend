import React, { useState } from "react";
import CustomModal from "./CustomModal";
import SimpleSelectComp from "../Select/SimpleSelectComp";
import SimpleTextInput from "../Input/SimpleTextInput";
import ModalBottomLine from "./ModalBottomLine";
import ModalButton from "../Buttons/ModalButton";
import { AddNewExpense } from "../../Https";
import SimpleSelectCompByName from "../Select/SimpleSelectCompByName";

const AddExpense = ({ open, setOpen }) => {
  // States
  const [ExpenseType, setExpenseType] = useState("");
  const [CurDate, setCurDate] = useState("");
  const [Desc, setDesc] = useState("");
  const [Expense, setExpense] = useState("");
  // Functions
  const onSubmit = async (e) => {
    e.preventDefault();
    if (ExpenseType !== "" && CurDate !== "" && Desc !== "" && Expense !== "") {
      const expenseInfo = {
        type: ExpenseType,
        date: CurDate,
        desc: Desc,
        expense: Expense,
      };
      const response = await AddNewExpense(expenseInfo);
      if (response.status === 500) alert("Unable to add expense");
      else if (response.status === 201) {
        alert("Expense Succesfully Added...");
        setOpen(false);
      }
    } else {
      alert("Fill All Fields....");
    }
  };
  return (
    <CustomModal title={"Add Expense"} open={open} setOpen={setOpen}>
      <form
        className="flex flex-col justify-center items-center pt-[10px]"
        onSubmit={onSubmit}
      >
        <SimpleSelectCompByName
          value={ExpenseType}
          setValue={setExpenseType}
          label={"Select Expense Type"}
          data={[
            { id: "Shop", name: "Shop" },
            { id: "Home", name: "Home" },
          ]}
        />
        <SimpleTextInput
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

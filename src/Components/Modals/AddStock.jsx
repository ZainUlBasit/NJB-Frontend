import React, { useEffect, useState } from "react";
import CustomModal from "./CustomModal";
import SimpleSelectComp from "../Select/SimpleSelectComp";
import SimpleTextInput from "../Input/SimpleTextInput";
import ModalBottomLine from "./ModalBottomLine";
import ModalButton from "../Buttons/ModalButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/Slices/ItemSlice";
import { AddItemQty, AddItemStock, UpdateCompanyTotal } from "../../Https";
import { fetchCompanies } from "../../store/Slices/CompanySlice";

const AddStock = ({ open, setOpen }) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    let curItem = "";
    let i_id = Items.filter((it) => {
      if (it._id === ItemName) {
        curItem = it.name;
        return it;
      }
    });
    const purchase = i_id[0].purchase;
    const id = i_id[0]._id;
    const f_company = i_id[0].company;

    let company_id = Companies.filter((co) => f_company === co.name);
    company_id = company_id[0]._id;

    const total = Number(purchase) * Number(ItemQty);
    const StockInfo = {
      company_id,
      name: curItem,
      qty: ItemQty,
      desc: ItemDesc,
      invoice: ItemInvoice,
      truck: ItemTruck,
      date: ItemDate,
    };

    try {
      let response = await AddItemQty(id, ItemQty);
      if (response.status === 404) alert("Item not found");
      else if (response.status === 200) alert("Stock Successfully Added...");
      await AddItemStock(StockInfo);
      await UpdateCompanyTotal({ id: company_id, cTotal: total });
      dispatch(fetchItems());
    } catch (err) {
      console.log("Error Occured", err.message);
    }
    setOpen(false);
  };

  const [ItemName, setItemName] = useState("");
  const [ItemQty, setItemQty] = useState("");
  const [ItemDesc, setItemDesc] = useState("");
  const [ItemInvoice, setItemInvoice] = useState("");
  const [ItemTruck, setItemTruck] = useState("");
  const [ItemDate, setItemDate] = useState("");

  let Items = useSelector((state) => state.ItemReducer.data);
  let Companies = useSelector((state) => state.CompanyReducer.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchCompanies());
  }, []);
  return (
    <CustomModal title={"Add Stock"} open={open} setOpen={setOpen}>
      <form className="flex flex-col justify-center items-center pt-[10px]">
        <SimpleSelectComp
          value={ItemName}
          setValue={setItemName}
          label={"Select Item"}
          data={Items}
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
        <SimpleTextInput
          type="date"
          id="date"
          name="date"
          value={ItemDate}
          setValue={setItemDate}
        />
        <ModalBottomLine />
      </form>
      <div className="flex justify-center items-center">
        <ModalButton title={"Add Stock"} onClick={onSubmit} />
      </div>
    </CustomModal>
  );
};

export default AddStock;

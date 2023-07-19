import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import ItemNav from "../../Components/Navigations/ItemNav";
import TableComp from "../../Components/Tables/TableComponent";
import { ItemInfoColumns } from "../../assets/Columns/ItemInfoColumns";
import AddItem from "../../Components/Modals/AddItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../store/Slices/ItemSlice";
import moment from "moment/moment";

const Items = () => {
  // Redux Toolkit
  let Items = useSelector((state) => state.ItemReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  return (
    <>
      <Navbar />
      <ItemNav />
      <TableComp
        title="ITEMS INFO"
        rows={Items.map((it) => {
          return {
            ...it,
            addeddate: moment(it.addeddate).format("DD/MM/YYYY"),
          };
        })}
        columns={ItemInfoColumns}
      />
    </>
  );
};

export default Items;

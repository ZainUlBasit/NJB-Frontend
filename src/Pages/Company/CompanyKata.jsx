import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import CompanyNav from "../../Components/Navigations/CompanyNav";
import AddCompany from "../../Components/Modals/AddCompany";
import TableComp from "../../Components/Tables/TableComponent";
import { CompaniesKataColumns } from "../../assets/Columns/CompaniesKataColumns";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../../store/Slices/CompanySlice";

const CompanyKata = () => {
  // redux toolkit
  let Companies = useSelector((state) => state.CompanyReducer.data);
  const dispatch = useDispatch();
  // Use Effects
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);
  return (
    <>
      <Navbar />
      <CompanyNav />
      <TableComp
        title="COMPANIES KATA"
        rows={Companies}
        columns={CompaniesKataColumns}
      />
    </>
  );
};

export default CompanyKata;

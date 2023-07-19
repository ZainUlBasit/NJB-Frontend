import React, { useEffect, useState } from "react";
import Navbar from "../../Components/NavBar/NavBar";
import CompanyNav from "../../Components/Navigations/CompanyNav";
import TableComp from "../../Components/Tables/TableComponent";
import { CompaniesInfoColumns } from "../../assets/Columns/CompaniesInfoColumns";
import { GetAllCompanies } from "../../Https";
import EditCompany from "../../Components/Modals/EditCompany";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../../store/Slices/CompanySlice";

const Company = () => {
  // Redux Toolkit
  let Companies = useSelector((state) => state.CompanyReducer.data);
  const dispatch = useDispatch();
  // States
  const [selComp, setSelComp] = useState("");
  const [EditCompanyModal, setEditCompanyModal] = useState(false);
  // Use Effects
  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <>
      <Navbar />
      <CompanyNav />
      <TableComp
        title="COMPANIES INFO"
        rows={Companies}
        columns={CompaniesInfoColumns}
        setEditCompanyModal={setEditCompanyModal}
        setSelID={setSelComp}
      />
      {EditCompanyModal ? (
        <EditCompany
          open={EditCompanyModal}
          setOpen={setEditCompanyModal}
          CompanyData={Companies.map((comp) => {
            if (comp._id === selComp) {
              return comp;
            }
          })}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Company;

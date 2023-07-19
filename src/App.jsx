import React from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Company from "./Pages/Company/Company";
import Items from "./Pages/Items/Items";
import Customer from "./Pages/Customer/Customer";
import CompanyKata from "./Pages/Company/CompanyKata";
import CompanyLedger from "./Pages/Company/CompanyLedger";
import StockStatistics from "./Pages/Items/StockStatistics";
import AddNewBill from "./Pages/Customer/AddNewBill";
import CustomerKata from "./Pages/Customer/CustomerKata";
import Report from "./Pages/Report/Report";
import ReportHome from "./Pages/Report/ReportHome";
import ReportDaily from "./Pages/Report/ReportDaily";
import CustomerLegder from "./Pages/Customer/CustomerLegder";
import ItemReturn from "./Pages/Customer/ItemReturn";
import Testing from "./Pages/Testing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* Company */}
        <Route path="/companies_info" element={<Company />} />
        <Route path="/companies_kata" element={<CompanyKata />} />
        <Route path="/company_ledger" element={<CompanyLedger />} />
        {/* Items */}
        <Route path="/items" element={<Items />} />
        <Route path="/stock-statistics" element={<StockStatistics />} />
        {/* Customers */}
        <Route path="/customer_info" element={<Customer />} />
        <Route path="/add_new_bill" element={<AddNewBill />} />
        <Route path="/customer_kata" element={<CustomerKata />} />
        <Route path="/customer_ledger" element={<CustomerLegder />} />
        <Route path="/customer_return" element={<ItemReturn />} />
        {/* Report */}
        <Route path="/reports" element={<Report />} />
        <Route path="/reports_home" element={<ReportHome />} />
        <Route path="/reports_daily" element={<ReportDaily />} />
        {/* Testing */}
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </>
  );
};

export default App;

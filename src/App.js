import React from "react";
import Header from "./components/Header.jsx"
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import PricingPage from "./pages/Pricing/PrizePage.jsx";
import PricingComparisonTable from "./components/PricingComparisionTable.jsx";
import Faq from "./components/Faq.jsx";

function app() {
  return (
    <div className="min-h-screen bg-white">
      <Header /> 
      <NavBar />
      <Main />
      <PricingPage/>
      <PricingComparisonTable/>
      <Faq/>
      <div className="flex items-center justify-center py-8">
      </div>
    </div>
  );

}
export default app;


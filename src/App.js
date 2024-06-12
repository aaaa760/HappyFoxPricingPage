import React, { useState } from "react";
import Header from "./components/Header.jsx"
import NavBar from "./components/NavBar.jsx";
import Main from "./components/Main.jsx";
import PricingPage from "./pages/Pricing/PrizePage.jsx";
import PricingPageUnlimited from "./pages/Pricing/PrizePageUnlimited.jsx";
import PricingComparisonTable from "./components/PricingComparisionTable.jsx";
import FAQSection from "./components/FAQSection.jsx";

function App() {
  const [showPricingPage, setShowPricingPage] = useState("pricing");

  const togglePricingPage = (page) => {
    setShowPricingPage(page);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header /> 
      <NavBar />
      <Main togglePricingPage={togglePricingPage} />
      {showPricingPage === "pricing" ? <PricingPage /> : null}
      {showPricingPage === "unlimited" ? <PricingPageUnlimited /> : null}
      <PricingComparisonTable/>
      <FAQSection/>
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header.jsx"
import NavBar from "./components/NavBar.jsx";
function app() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> 
      <NavBar />
      <div className="flex items-center justify-center py-8">
        
      </div>
    </div>
  );

}
export default app;
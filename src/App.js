import React, { useState } from "react";
import FinancialDashboard from "./FinancialDashboard";
import { DashboardProvider } from "./context/DashboardContext";

export default function App() {
  return (
    <div className="App">
      <DashboardProvider>
        <FinancialDashboard />
      </DashboardProvider>
    </div>
  );
}

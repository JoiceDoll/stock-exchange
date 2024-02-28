import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";


import {Home, Company, Financial} from "@/pages"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/financialData" element={<Financial />} />
        <Route path="/companySummary" element={<Company />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

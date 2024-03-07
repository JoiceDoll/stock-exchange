import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import { useRoutePaths } from "@/hooks/useRoutePaths";
import { Routes, Route } from "react-router-dom";
import { Home, Company, Financial } from "@/pages";
const { FINANCIAL_PATH, COMPANY_PATH, HOME_PATH } = useRoutePaths();

export default function Router() {
  return (
    <Routes>
      <Route path={HOME_PATH} element={<Home />} />
      <Route path={FINANCIAL_PATH} element={<Financial />} />
      <Route path={COMPANY_PATH} element={<Company />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

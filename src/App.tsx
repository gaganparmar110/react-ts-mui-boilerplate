import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import SendMoney from "./components/SendMoney";
import CreateAccount from "./components/CreateAccount";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/send" element={<SendMoney />} />
            <Route path="/create-account" element={<CreateAccount />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
console.log("idan");
root.render(<App />);

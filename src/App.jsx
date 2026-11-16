import { useState } from "react";

import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>

     

<Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Navigate to={'/login'} replace></Navigate>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

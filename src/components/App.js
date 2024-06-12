import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { smsStore } from "../redux/smsStore";
import { Provider } from "react-redux";

export default function App() {
  return (
    <div>
      <Provider store={smsStore}>
        <ToastContainer />
        <Header></Header>
        <Outlet></Outlet>
      </Provider>
    </div>
  );
}

import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

export default function App() {
  return (
    <div>
       <ToastContainer />
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

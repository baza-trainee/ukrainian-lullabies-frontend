import React from 'react';
import { Outlet } from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import "./Layouts.css";

export default function RootLayout() {
  return (
    <div className='background-dark'>
      <div className='container content'>
         <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
      </div>
    </div>
  );
}
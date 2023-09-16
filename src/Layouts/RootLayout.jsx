import React from 'react';
import { Outlet } from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";
import "./Layouts.css";

export default function RootLayout() {
  return (
    <>
      <div className='bg-dark'>
        <div className="bg-dark-img-left"></div>  
        <div className='content bg-dark'>
          <Header />
          <main className='container'>
            <Outlet />
          </main>
          <Footer />
        </div>
      <div className="bg-dark-img-right"></div>  
    </div>
    </>
  );
}

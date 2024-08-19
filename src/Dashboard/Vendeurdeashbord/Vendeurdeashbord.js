import React from 'react';
import { Outlet } from 'react-router-dom';
import "./Vendeurdeashbord.css";
import VendeurSidebare from './VendeurSidebare';

export default function Vendeurdeashbord() {
  return (
    <div className="main-layout">
      <VendeurSidebare />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

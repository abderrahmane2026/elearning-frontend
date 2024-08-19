import React from 'react'
import "./Admine.css"
import "./AdminSidebare"
import AdminSidebare from './AdminSidebare';
import { Outlet } from 'react-router-dom';

export default function Admindeashbord() {
    return (
      <div className="main-layout">
      <AdminSidebare />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
      );
}

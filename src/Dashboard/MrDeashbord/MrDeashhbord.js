import React from 'react'
import "./Mr.css"

import Mrsidebare from './Mrsidebare';
import { Outlet } from 'react-router-dom';

export default function Mrdeashbord() {
    return (
      <div className="main-layout">
      <Mrsidebare />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
      );
}

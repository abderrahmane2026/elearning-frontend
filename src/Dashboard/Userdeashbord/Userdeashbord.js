import React from 'react'
import { Routes, Route, Outlet  } from 'react-router-dom';
import UserSidebare from './UserSidebare'
import "./Userdeashbord.css"


export default function Userdashbord() {
  return (
    <div className="main-layout">
    <UserSidebare />
    <div className="main-content">
      <Outlet />
    </div>
  </div>
  )
}

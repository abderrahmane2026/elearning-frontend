import React, { useState, useEffect } from 'react';
import { FaBoxOpen, FaUser, FaList, FaCog, FaShoppingCart, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import "./Admine.css";

export default function AdminSidebare() {
  
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`deachbord-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="collapse-btn" onClick={handleCollapse}>
        <FaBars />
      </button>
      <ul>
        <li>
          <Link to="account">
            <FaUser />
            {!isCollapsed && ('الحساب')}
          </Link>
        </li>
        <li>
          <Link to="users">
            <FaUser />
            {!isCollapsed && ('المستخدمون')}
          </Link>
        </li>
        <li>
          <Link to="Mr">
            <FaUser />
            {!isCollapsed && ('الاساتذة')}
          </Link>
        </li>
        <li>
          <Link to="orderstudent">
            <FaUser />
            {!isCollapsed && ('طلبات البحث عن تربص')}
          </Link>
        </li>
        <li>
          <Link to="educationlist">
            <FaUser />
            {!isCollapsed && ('طلبات تحسين المستوى')}
          </Link>
        </li>
        <li>
          <Link to="AddCompany">
            <FaBoxOpen />
            {!isCollapsed && ('اضافة شركة تربص')}
          </Link>
        </li>
        
       
        <li>
          <Link to="AllCompanies">
            <FaBoxOpen />
            {!isCollapsed && ('كل الشركات')}
          </Link>
        </li>
        <li>
          <Link to="JobsList">
            <FaBoxOpen />
            {!isCollapsed && ('قايمة طلبات العمل')}
          </Link>
        </li>
        
        <li>
          <Link to="CompanyOrders">
            <FaBoxOpen />
            {!isCollapsed && ('طلبات التربص')}
          </Link>
        </li>
       
        <li>
          <Link to="settings">
            <FaCog />
            {!isCollapsed && ('الاعدادات')}
          </Link>
        </li>
        <li>
          <Link to="reports">
            <FaMessage />
            {!isCollapsed && ('الرسائل')}
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              window.localStorage.removeItem('userr');
              window.location.href = '/';
            }}
          >
            <FaSignOutAlt />
            {!isCollapsed && ('تسجيل الخروج')}
          </button>
        </li>
      </ul>
    </div>
  );
}

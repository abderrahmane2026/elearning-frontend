import React, { useState, useEffect } from 'react';
import { FaBoxOpen, FaUser, FaList, FaCog, FaShoppingCart, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import "./Mr.css";

export default function MrSidebare() {
  
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
        <Link to="AddCourse">
          <FaBoxOpen />
          {!isCollapsed && ('اضافة دورة')}
        </Link>
      </li>

      <li>
        <Link to="AddLecture">
          <FaBoxOpen />
          {!isCollapsed && ('اضافة محاضرة')}
        </Link>
      </li>

      
     
      <li>
        <Link to="CourseOrders">
          <FaBoxOpen />
          {!isCollapsed && ('طلبات الدورات')}
        </Link>
      </li>
     
      <li>
        <Link to="LecturesOrders">
          <FaBoxOpen />
          {!isCollapsed && ('طلبات المحاضرات')}
        </Link>
      </li>

      <li>
        <Link to="settings">
          <FaCog />
          {!isCollapsed && ('الاعدادات')}
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

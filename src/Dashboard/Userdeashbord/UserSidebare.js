import React, { useState, useEffect } from 'react';
import { FaUser, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Userdeashbord.css';


export default function UserSidebare() {
 
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
          <Link to="settings">
            <FaCog />
            {!isCollapsed && ('الاعدادات')}
          </Link>
        </li>
        <li>
          <Link to="myOrders">
            <FaCog />
            {!isCollapsed && ('طلباتي')}
          </Link>
        </li>
        <li>
          <a onClick={() => {
            window.localStorage.removeItem('userr');
            window.location.href = '/';
          }}>
            <FaSignOutAlt />
            {!isCollapsed && ('تسجيل الخروج')}
          </a>
        </li>
      </ul>
     
    </div>
  );
}

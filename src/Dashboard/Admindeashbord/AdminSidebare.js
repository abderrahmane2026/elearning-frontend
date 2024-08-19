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
            {!isCollapsed && ('account')}
          </Link>
        </li>
        <li>
          <Link to="users">
            <FaUser />
            {!isCollapsed && ('users')}
          </Link>
        </li>
        <li>
          <Link to="AddCompany">
            <FaBoxOpen />
            {!isCollapsed && ('AddCompany')}
          </Link>
        </li>
        <li>
          <Link to="ServiceControl">
            <FaBoxOpen />
            {!isCollapsed && ('serviceControl')}
          </Link>
        </li>
        <li>
          <Link to="settings">
            <FaCog />
            {!isCollapsed && ('settings')}
          </Link>
        </li>
        <li>
          <Link to="reports">
            <FaMessage />
            {!isCollapsed && ('messages')}
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
            {!isCollapsed && ('logout')}
          </button>
        </li>
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { FaBoxOpen, FaUser, FaList, FaCog, FaShoppingCart, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

import "./Vendeurdeashbord.css";

export default function VendeurSidebare() {
  
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
          <NavLink to="account" activeClassName="active">
            <FaUser />
            {!isCollapsed && ('account')}
          </NavLink>
        </li>
        <li>
          <NavLink to="AddProduct" activeClassName="active">
            <FaBoxOpen />
            {!isCollapsed && ('addService')}
          </NavLink>
        </li>
        <li>
          <NavLink to="products" activeClassName="active">
            <FaList />
            {!isCollapsed && ('listOfService')}
          </NavLink>
        </li>
        <li>
          <NavLink to="settings" activeClassName="active">
            <FaCog />
            {!isCollapsed && ('settings')}
          </NavLink>
        </li>
        <li>
          <NavLink to="orders" activeClassName="active">
            <FaShoppingCart />
            {!isCollapsed && ('orders')}
          </NavLink>
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

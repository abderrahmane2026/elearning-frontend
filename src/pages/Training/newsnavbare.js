// Newsnavbare.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Training.css';

function Trainingnavbare() {
  const location = useLocation();

  return (
    <div className="top-bar">
      <Link to="page1" className={location.pathname === '/Training/page1' ? 'active' : ''} > الشركات المتعاقدة معنا </Link>
      <Link to="page2" className={location.pathname === '/Training/page2' ? 'active' : ''}>اشهار للشركات</Link>
      <Link to="page3" className={location.pathname === '/Training/page3' ? 'active' : ''}>التربص في المؤسسات المرغوبة من طرف المستخدم </Link>
      <Link to="page4" className={location.pathname === '/Training/page4' ? 'active' : ''}>التربص في المؤسسات المختارة من طرف المستخدم  </Link>
    </div>
  );
}

export default Trainingnavbare;

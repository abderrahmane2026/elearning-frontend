import React, { useState } from 'react';
import Newsnavbare from './newsnavbare';

import { Outlet } from 'react-router-dom';
 function Training ()  {

  return (
    <div className="news-page">
        <Newsnavbare/>
       
        <Outlet />
    </div>
  );
};

export default Training;

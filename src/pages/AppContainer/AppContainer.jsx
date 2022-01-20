import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar.component';
import './AppContainer.scss';

const AppContainer = () => (
  <div className="app-container">
    <Sidebar />
    <Outlet />
  </div>
);

export default AppContainer;

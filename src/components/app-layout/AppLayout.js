import React from 'react';
import './AppLayout.css';
import Navbar from '../../app/nav-bar/NavBar'
export function AppLayout(props) {
  return (
      <div className='app-layout'>
        <Navbar />
        {props.children}
      </div>
  );
}
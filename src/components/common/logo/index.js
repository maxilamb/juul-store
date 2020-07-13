import React from 'react';
import './style.sass';

export default function Logo() {
  return (
    <div className='logo black-box'>
      <span>WYLSA</span>
      <span>SHOP</span>
    </div>
  );
}

export const LogoFooter = () => <h2 className='display-5 logo-footer'>WYLSASHOP</h2>;

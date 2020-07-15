import React from 'react';
import LogoImg from './logo.jpg';
import './style.sass';

export default function Logo() {
  return (
    <div className='logo black-box'>
      <img src={LogoImg} alt='Logo' />
    </div>
  );
}

export const LogoFooter = () => <h2 className='display-5 logo-footer'>JUULLAB</h2>;

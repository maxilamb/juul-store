import React from 'react';
import style from './style.module.sass';

export default function Logo() {
  return (
    <div className={style.logo}>
      <h2>OVNS</h2>
    </div>
  );
}

export const LogoFooter = () => <h2 className='display-5'>OVNS</h2>;

import React, { useEffect, useState } from 'react';
import { Event } from 'rc-scroll-anim/es';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import NavLink from '../nav-link';
import Logo from '../logo';
import './style.sass';

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [toggleOpen, setToggle] = useState(false);

  useEffect(() => {
    Event.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
    return () => Event.removeEventListener('scroll');
  });

  return (
    <header className={cx({ 'shadow-sm': scroll })}>
      <div className='container'>
        <div className='top'>
          <NavLink className='logo' to='/' rootTo='juul'>
            <Logo />
          </NavLink>
          <Link
            to='/'
            onClick={() => setToggle((s) => !s)}
            className={cx('burger', { toggle: toggleOpen })}
          >
            <div className='line1' />
            <div className='line2' />
            <div className='line3' />
          </Link>
        </div>
        <ul className={cx('nav', { open: toggleOpen })}>
          <li>
            <NavLink clickHandler={() => setToggle(false)} rootTo='juul' to='/'>
              Juul
            </NavLink>
          </li>
          <li>
            <NavLink clickHandler={() => setToggle(false)} rootTo='device' to='/'>
              Что такое Juul
            </NavLink>
          </li>
          <li>
            <NavLink clickHandler={() => setToggle(false)} rootTo='warranty' to='/'>
              Безопасная покупка
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

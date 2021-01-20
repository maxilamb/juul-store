import React, { useContext, useEffect, useState } from 'react';
import { Event } from 'rc-scroll-anim/es';
import cx from 'classnames';
import NavLink from '../nav-link';
import Logo from '../logo';

import Context from '../../../context';
import './style.sass';
import OrderForm from '../../order-form';

export default function Header() {
  const {
    dispatch,
    store: { formIsVisible },
  } = useContext(Context);
  const [scroll, setScroll] = useState(false);
  const [btnIsVisible, showButton] = useState(false);

  useEffect(() => {
    Event.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      if (window.scrollY > 255) {
        showButton(true);
      } else {
        showButton(false);
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
          <button
            type='button'
            className={cx('btn rounded-pill', {
              'd-none': !formIsVisible && !btnIsVisible,
              'btn-danger': !formIsVisible,
              'btn-outline-primary': formIsVisible,
            })}
            onClick={() => {
              dispatch({
                type: 'SET_VISIBLE',
                payload: !formIsVisible,
              });
            }}
          >
            {formIsVisible ? 'куплю позже' : 'купить'}
          </button>
        </div>
        <div className={cx('nav', { open: formIsVisible })}>
          <OrderForm />
        </div>
      </div>
    </header>
  );
}

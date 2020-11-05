import React from 'react';
import { Link } from 'react-router-dom';
import { LogoFooter } from '../logo';
import './style.sass';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-3' />
          <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
            <div>
              <LogoFooter />
              <p className='mb-0'>
                <small className='text-muted'>Все права защищены ©</small>
              </p>
              <Link to='/terms'>Пользовательское соглашение</Link>
            </div>
          </div>
          <div className='col-12 col-md-3' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

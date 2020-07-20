import React from 'react';
import { Link } from 'react-router-dom';
import { LogoFooter } from '../logo';
import iconInstagram from './images/instagram.svg';
import iconTelegram from './images/telegram.svg';
import './style.sass';

function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-3 d-flex align-items-center justify-content-center'>
            <Link to='/terms'>Пользовательское соглашение</Link>
          </div>
          <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
            <div>
              <LogoFooter />
              <small className='text-muted'>Все права защищены ©</small>
            </div>
          </div>
          <div className='col-12 col-md-3'>
            <ul className='list-group list-group-horizontal'>
              <li className='list-group-item'>
                <a href='https://www.instagram.com/explore/tags/juullabs/' title='Мы в инстаграм'>
                  <img src={iconInstagram} alt='штыефпкфьь social icon' />
                </a>
              </li>
              <li className='list-group-item'>
                <a href='https://www.t.me/juullabs' title='Мы в телеграмме'>
                  <img src={iconTelegram} alt='telegram social icon' />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useEffect, useState } from 'react';
import { Element, Event } from 'rc-scroll-anim';
import cx from 'classnames';
import SectionHeader from '../../common/section-header';
import classicTaste from './images/classic.webp';
import mangoTaste from './images/mango.webp';
import mintTaste from './images/mint.webp';
import vanillaTaste from './images/vanilla.webp';
import virdgTaste from './images/virdg.webp';
import fruitsMixTaste from './images/fruits-mix.webp';

export default function Taste() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    Event.addEventListener('scroll', () => {
      if (window.scrollY > 1200 || window.scrollY > 1560) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    });
    return () => Event.removeEventListener('scroll');
  });
  return (
    <Element component='section' id='tastes' className='px-lg-5 text-center'>
      <div
        className={cx('px-lg-5 text-center animate__animated', {
          animate__bounceInUp: animate,
          animate__bounceOutDown: !animate,
        })}
      >
        <SectionHeader header='Только вкус ничего больше' text='Открывайте для себя вкусы JUUL' />
        <div className='taste-list'>
          <div className='taste-item'>
            <img src={classicTaste} alt='' />
            <span>Классический</span>
          </div>
          <div className='taste-item'>
            <img src={mangoTaste} alt='' />
            <span>Манго</span>
          </div>
          <div className='taste-item'>
            <img src={mintTaste} alt='' />
            <span>Мята</span>
          </div>
          <div className='taste-item'>
            <img src={vanillaTaste} alt='' />
            <span>Ваниль</span>
          </div>
          <div className='taste-item'>
            <img src={virdgTaste} alt='' />
            <span>Вирджиния</span>
          </div>
          <div className='taste-item'>
            <img src={fruitsMixTaste} alt='' />
            <span>Фруктовый микс</span>
          </div>
        </div>
      </div>
    </Element>
  );
}

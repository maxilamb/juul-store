import React, { useEffect, useState } from 'react';
import { Element, Event } from 'rc-scroll-anim';
import cx from 'classnames';
import SectionHeader from '../../common/section-header';
import classicTasteWebp from './images/classic.webp';
import classicTasteJpg from './images/classic.jpg';
import mangoTasteWebp from './images/mango.webp';
import mangoTasteJpg from './images/mango.jpg';
import mintTasteJpg from './images/mint.jpg';
import mintTasteWebp from './images/mint.webp';
import vanillaTasteJpg from './images/vanilla.jpg';
import vanillaTasteWebp from './images/vanilla.webp';
import virdgTasteJpg from './images/virdg.jpg';
import virdgTasteWebp from './images/virdg.webp';
import fruitsMixTasteJpg from './images/fruits-mix.jpg';
import fruitsMixTasteWebp from './images/fruits-mix.webp';

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
            <picture>
              <source srcSet={classicTasteJpg} />
              <img src={classicTasteWebp} alt='taste classic' />
            </picture>
            <span>Классический</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={mangoTasteJpg} />
              <img src={mangoTasteWebp} alt='taste mango' />
            </picture>
            <span>Манго</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={mintTasteJpg} />
              <img src={mintTasteWebp} alt='taste mint' />
            </picture>
            <span>Мята</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={vanillaTasteJpg} />
              <img src={vanillaTasteWebp} alt='taste vanilla' />
            </picture>
            <span>Ваниль</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={virdgTasteJpg} />
              <img src={virdgTasteWebp} alt='taste virdg' />
            </picture>
            <span>Вирджиния</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={fruitsMixTasteJpg} />
              <img src={fruitsMixTasteWebp} alt='taste fruit mix' />
            </picture>
            <span>Фруктовый микс</span>
          </div>
        </div>
      </div>
    </Element>
  );
}

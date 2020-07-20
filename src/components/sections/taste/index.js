import React, { useEffect, useState } from 'react';
import { Element, Event } from 'rc-scroll-anim';
import cx from 'classnames';
import SectionHeader from '../../common/section-header';
import classicTasteWebp from './images/classic.webp';
import classicTastePng from './images/classic.png';
import mangoTasteWebp from './images/mango.webp';
import mangoTastePng from './images/mango.png';
import mintTastePng from './images/mint.png';
import mintTasteWebp from './images/mint.webp';
import vanillaTastePng from './images/vanilla.png';
import vanillaTasteWebp from './images/vanilla.webp';
import virdgTastePng from './images/virdg.png';
import virdgTasteWebp from './images/virdg.webp';
import fruitsMixTastePng from './images/fruits-mix.png';
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
              <source srcSet={classicTastePng} />
              <img src={classicTasteWebp} alt='taste classic' />
            </picture>
            <span>Классический</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={mangoTastePng} />
              <img src={mangoTasteWebp} alt='taste mango' />
            </picture>
            <span>Манго</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={mintTastePng} />
              <img src={mintTasteWebp} alt='taste mint' />
            </picture>
            <span>Мята</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={vanillaTastePng} />
              <img src={vanillaTasteWebp} alt='taste vanilla' />
            </picture>
            <span>Ваниль</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={virdgTastePng} />
              <img src={virdgTasteWebp} alt='taste virdg' />
            </picture>
            <span>Вирджиния</span>
          </div>
          <div className='taste-item'>
            <picture>
              <source srcSet={fruitsMixTastePng} />
              <img src={fruitsMixTasteWebp} alt='taste fruit mix' />
            </picture>
            <span>Фруктовый микс</span>
          </div>
        </div>
      </div>
    </Element>
  );
}

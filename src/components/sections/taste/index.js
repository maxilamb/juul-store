import React from 'react';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import classicTaste from './images/classic.webp';
import mangoTaste from './images/mango.webp';
import mintTaste from './images/mint.webp';
import vanillaTaste from './images/vanilla.webp';
import virdgTaste from './images/virdg.webp';
import fruitsMixTaste from './images/fruits-mix.webp';

export default function Taste() {
  return (
    <Element component='section' className='px-lg-5 text-center' id='tastes'>
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
    </Element>
  );
}

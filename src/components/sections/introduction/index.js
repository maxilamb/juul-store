import React from 'react';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import allColorsPng from './img/all.png';
import allColorsW from './img/all.webp';
import './style.sass';

export default function Introduction() {
  return (
    <Element component='div' id='introduction'>
      <SectionHeader header='JUUL W01' text='Ваша следующая сигарета - не сигарета' />
      <div className='price'>
        <h3>
          За 1999 ₽ <span className='old-price'>2345 ₽</span>
        </h3>
        <button type='button' className='btn btn-outline-danger btn-lg rounded-pill px-5'>
          Купить
        </button>
      </div>
      <picture>
        <source srcSet={allColorsW} />
        <img src={allColorsPng} alt='Все цвета' />
      </picture>
    </Element>
  );
}

import React from 'react';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import chargeSizeDefault from './img/charge.jpg';
import chargeSizeSmall from './img/charge-small.jpg';
import './style.sass';

export default function Charge() {
  return (
    <Element component='div' className='charge container-fluid px-lg-5' id='charge-info'>
      <SectionHeader
        header='Универсальный USB порт для зарядки'
        text='Литиевая батарея емкостью 280 мАч с LED индикатором'
      />
      <ul>
        <li>Полностью заряжен</li>
        <li>Средний заряд</li>
        <li>Слабый заряд</li>
      </ul>
      <picture>
        <source media='(min-width: 768px), 50vw' srcSet={chargeSizeDefault} />
        <img src={chargeSizeSmall} alt='картника ' />
      </picture>
    </Element>
  );
}

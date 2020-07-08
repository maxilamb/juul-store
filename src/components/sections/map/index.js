import React from 'react';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import russianMap from './img/russia.svg';

export default function Map() {
  return (
    <Element component='section' className='text-center px-lg-5' id='map'>
      <SectionHeader header='Карта нашей доставки' text='Где бы вы не были JUUL мы доставим' />
      <div className='container'>
        <img className='w-100' src={russianMap} alt='карта России' />
      </div>
    </Element>
  );
}

import React from 'react';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import deviceLargeSize from './img/device.jpg';
import deviceSmallSize from './img/device-small.jpg';

export default function Device() {
  return (
    <Element component='section' className='container-fluid px-lg-5' id='device'>
      <SectionHeader
        header='Крошечный изысканный и портативный'
        text='Никаких кнопок и переключателей. Вставляешь pods и пользуешься.'
      />
      <picture>
        <source media='(min-width: 768px)' srcSet={deviceLargeSize} />
        <img className='w-100' src={deviceSmallSize} alt='text here' />
      </picture>
    </Element>
  );
}

import React from 'react';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import deviceImage from './img/device.jpg';
import deviceImage2 from './img/device-2.jpg';
import Article from '../../common/article';
import './style.sass';

export default function Advantages() {
  return (
    <Element component='div' className='container px-lg-5' id='advantages'>
      <SectionHeader
        header='Преимущества JUUL W01'
        text={`
        Наш уровень безопасности и удобства не сравним с другими электроными сигаретами и vape
        `}
      />
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <img className='w-100' src={deviceImage2} alt='' />
        </div>
        <div className='col-12 col-lg-6 d-flex align-items-center'>
          <div className='advantages-article'>
            <Article
              header='Четыре функции защиты'
              text={`
              Стабильная производительность и реальная безопасность
              `}
              center
            />
            <ul>
              <li>Защита от перезаряда</li>
              <li>Защита от низкого напряжения</li>
              <li>Защита от полного разряда</li>
              <li>Защита от короткого замыкания</li>
            </ul>
          </div>
        </div>
        <div className='col-12 col-lg-6 d-flex align-items-center'>
          <Article
            header='Установка pod в одну секунду'
            text={`
            Аккуратно вставьте картридж в указаном направлении,
            при успешной установки индикатор замигает 2 раза
            `}
            center
          />
        </div>
        <div className='col-12 col-lg-6'>
          <img className='w-100' src={deviceImage} alt='' />
        </div>
      </div>
    </Element>
  );
}

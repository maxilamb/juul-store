import React, { useContext, useEffect } from 'react';
import { Element } from 'rc-scroll-anim';
import axios from 'axios';
import Context from '../../../context';
import BlackProductWebp from './img/juul_black.webp';
import BlackProductJpg from './img/juul_black.jpg';
import BlueProductWebp from './img/juul_blue.webp';
import BlueProductJpg from './img/juul_blue.jpg';
import GoldProductWebp from './img/juul_gold.webp';
import GoldProductJpg from './img/juul_gold.jpg';
import RedProductWebp from './img/juul_red.webp';
import RedProductJpg from './img/juul_red.jpg';
import StepFirst from '../../order-form/step-first';
import StepSecond from '../../order-form/step-second';
import StepThree from '../../order-form/step-three';
import StepSuccess from '../../order-form/step-success';
import './style.sass';

function getImage(color, format) {
  switch (color) {
    case 'blue':
      return format === 'webp' ? BlueProductWebp : BlueProductJpg;
    case 'gold':
      return format === 'webp' ? GoldProductWebp : GoldProductJpg;
    case 'red':
      return format === 'webp' ? RedProductWebp : RedProductJpg;
    default:
      return format === 'webp' ? BlackProductWebp : BlackProductJpg;
  }
}

export default function Juul() {
  const {
    store,
    store: { selectedColor, formStage, price, oldPrice },
  } = useContext(Context);

  useEffect(() => {
    if (formStage !== 4) return;
    axios.post('/api/v1/order', store);
  }, [formStage, store]);

  return (
    <Element component='section' className='container-fluid' id='juul'>
      <div className='row'>
        <div className='col-12 col-md-7 d-flex flex-column justify-content-end'>
          <picture>
            <source
              className='product-image animate__animated animate__tada'
              srcSet={getImage(selectedColor, 'jpg')}
            />
            <img
              className='product-image animate__animated animate__tada'
              src={getImage(selectedColor, 'webp')}
              alt='JUUL'
            />
          </picture>
        </div>
        <div className='col-12 col-md-5 product-card'>
          <div>
            <h1>ЭЛЕКТРОННАЯ СИГАРЕТА JUUL</h1>
            <h2 className='price'>
              {price} ₽<span>{oldPrice} ₽</span>
            </h2>
            <h6 className='text-muted'>* Вы экономите {oldPrice - price} ₽</h6>
          </div>
          {formStage === 1 && (
            <>
              <p className='text-muted'>
                Джул – это устройство, способное полностью заменить обычные табачные изделия. Она
                буквально создана для тех, кто не только ищет способ сохранить своё здоровье, но и
                предпочитает компактность и удобство.
              </p>
              <div className='form-container'>
                <StepFirst />
              </div>
            </>
          )}
          <div className='form-container'>
            {formStage === 2 && <StepSecond />}
            {formStage === 3 && <StepThree />}
            {formStage === 4 && <StepSuccess />}
          </div>
        </div>
      </div>
    </Element>
  );
}

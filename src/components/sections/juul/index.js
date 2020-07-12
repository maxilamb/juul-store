import React, { useContext } from 'react';
import { Element } from 'rc-scroll-anim';
import Context from '../../../context';
import BlackProduct from './img/juul_black.webp';
import BlueProduct from './img/juul_blue.webp';
import GoldProduct from './img/juul_gold.webp';
import RedProduct from './img/juul_red.webp';
import StepFirst from '../../order-form/step-first';
import StepSecond from '../../order-form/step-second';
import StepThree from '../../order-form/step-three';
import StepSuccess from '../../order-form/step-success';
import './style.sass';

function getImage(color) {
  switch (color) {
    case 'blue':
      return BlueProduct;
    case 'gold':
      return GoldProduct;
    case 'red':
      return RedProduct;
    default:
      return BlackProduct;
  }
}

export default function Juul() {
  const {
    store: { selectedColor, formStage, price, oldPrice },
  } = useContext(Context);

  return (
    <Element component='section' className='container-fluid' id='juul'>
      <div className='row'>
        <div className='col-12 col-md-7 d-flex flex-column justify-content-end'>
          <img
            className='product-image animate__animated animate__tada'
            src={getImage(selectedColor)}
            alt='JUUL'
          />
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

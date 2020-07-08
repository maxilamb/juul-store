import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'rc-scroll-anim';
import SectionHeader from '../../common/section-header';
import Article from '../../common/article';
import imgA from './img/customer-protection.svg';
import imgB from './img/tracking-shipment.svg';
import imgC from './img/feedback.svg';
import './style.sass';

export default function Warranty() {
  return (
    <Element component='section' id='warranty'>
      <SectionHeader header='Покупайте с увереностью' text='Гарантия возврата средств' />
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-4 text-center'>
            <img src={imgA} alt='customer protection' />
            <Article
              header='Защита покупателей '
              text={`Если товар, который вы заказали, не был доставлен
              или существенно отличается от описания, мы поможем вернуть его стоимость.`}
              center
            />
            <Link to='/back-money' className='btn btn-lg btn-outline-primary rounded-pill'>
              Вернуть деньги
            </Link>
          </div>
          <div className='col-12 col-lg-4 text-center'>
            <img src={imgB} alt='tracking shipment' />
            <Article
              header='Отслеживание посылки'
              text={`Мы круглосуточно контролируем каждую операцию в
              режиме реального времени, чтобы противодействовать мошенничеству.`}
              center
            />
            <a href='https://track24.ru/' className='btn btn-lg btn-outline-primary rounded-pill'>
              Отследить посылку
            </a>
          </div>
          <div className='col-12 col-lg-4 text-center'>
            <img src={imgC} alt='feedback' />
            <Article
              header='Обратная связь'
              text={`Каждая операция кодируется с помощью
              нашей усовершенствованной технологии шифрования.`}
              center
            />
            <Link to='/contact' className='btn btn-lg btn-outline-primary rounded-pill'>
              Написать нам
            </Link>
          </div>
        </div>
        <div className='text-center'>
          <Link className='text-muted' to='/termsAndConditions'>
            Условия и положения
          </Link>
        </div>
      </div>
    </Element>
  );
}

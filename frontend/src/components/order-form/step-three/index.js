import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Context from '../../../context';
import MirIc from './payment-icon/mir.svg';
import MasterCardIc from './payment-icon/master-card.svg';
import QIWIIc from './payment-icon/qiwi.svg';
import VisaIc from './payment-icon/visa.svg';
import YandexIc from './payment-icon/yandex.png';
import './style.sass';

export default function StepThree() {
  const {
    store,
    store: { paymentMethod, price },
    dispatch,
  } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    switch (paymentMethod) {
      case 'yandex': {
        const link =
          'https://money.yandex.ru/quickpay/button-widget?targets=%D0%AD%D0%9B%D0%95%D0%9A%D0%A2%D0%A0%D0%9E%D0%9D%D0%9D%D0%90%D0%AF%20%D0%A1%D0%98%D0%93%D0%90%D0%A0%D0%95%D0%A2%D0%90%20JUUL&default-sum=1999&button-text=12&any-card-payment-type=on&button-size=l&button-color=black&successURL=&quickpay=small&account=410013858615662&';
        window.open(link, '_blank');
        break;
      }
      case 'yandex2': {
        const link =
          'https://money.yandex.ru/quickpay/button-widget?targets=%D0%AD%D0%9B%D0%95%D0%9A%D0%A2%D0%A0%D0%9E%D0%9D%D0%9D%D0%90%D0%AF%20%D0%A1%D0%98%D0%93%D0%90%D0%A0%D0%95%D0%A2%D0%90%20JUUL&default-sum=1999&button-text=12&yamoney-payment-type=on&button-size=l&button-color=black&successURL=&quickpay=small&account=410013858615662&';
        window.open(link, '_blank');
        break;
      }
      case 'qiwi':
        window.open('https://my.qiwi.com/Vladyslav-Zpds6E-N3o', '_blank');
        break;
      default:
        throw new Error('Что-то пошло не так, перезагрузите страницу');
    }
    dispatch({
      type: 'CHANGE_FORM_STAGE',
      payload: 4,
    });
    (async () => {
      try {
        await axios.post('/api/v1/order', store);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }

  function handleChange(e) {
    dispatch({
      type: 'CHANGE_PAYMENT_METHOD',
      payload: e.target.value,
    });
  }

  return (
    <div className='step-three'>
      <h2>Вы оплачиваете: {price} ₽</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-check'>
          <label htmlFor='qiwi' className='form-check-label'>
            <input
              id='qiwi'
              name='qiwi'
              value='qiwi'
              type='radio'
              className='form-check-input'
              onChange={handleChange}
              checked={paymentMethod === 'qiwi'}
            />
            <span className='payment-icons'>
              <img src={QIWIIc} alt='qiwi' />
            </span>
          </label>
        </div>
        <div className='form-check'>
          <label htmlFor='yandex' className='form-check-label'>
            <input
              id='yandex'
              name='yandex'
              value='yandex'
              type='radio'
              className='form-check-input'
              onChange={handleChange}
              checked={paymentMethod === 'yandex'}
            />
            <span className='payment-icons'>
              <img src={MirIc} alt='mir' />
              <img src={MasterCardIc} alt='master card' />
              <img src={VisaIc} alt='visa' />
            </span>
          </label>
        </div>
        <div className='form-check'>
          <label htmlFor='yandex2' className='form-check-label'>
            <input
              id='yandex2'
              name='yandex2'
              value='yandex2'
              type='radio'
              className='form-check-input'
              onChange={handleChange}
              checked={paymentMethod === 'yandex2'}
            />
            <span className='payment-icons'>
              <img src={YandexIc} alt='yandex' />
            </span>
          </label>
        </div>
        <button
          type='submit'
          className='btn btn-outline-danger btn-lg btn-block rounded-pill action'
        >
          Оплатить
        </button>
        <Link to='/' onClick={() => dispatch({ type: 'CHANGE_FORM_STAGE', payload: 2 })}>
          Назад
        </Link>
      </form>
    </div>
  );
}

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../../context';
import MirIc from './payment-icon/mir.svg';
import MasterCardIc from './payment-icon/master-card.svg';
import QIWIIc from './payment-icon/qiwi.svg';
import VisaIc from './payment-icon/visa.svg';
import './style.sass';

export default function StepThree() {
  const {
    store: { paymentMethod },
    dispatch,
  } = useContext(Context);

  function handleSubmit(e) {
    e.preventDefault();
    switch (paymentMethod) {
      case 'webmoney':
        window.open('https://my.qiwi.com/Vladyslav-Zpds6E-N3o', '_blank');
        break;
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
  }

  function handleChange(e) {
    dispatch({
      type: 'CHANGE_PAYMENT_METHOD',
      payload: e.target.value,
    });
  }

  return (
    <div className='step-three'>
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
              <img src={QIWIIc} alt='' />
              <img src={MirIc} alt='' />
              <img src={MasterCardIc} alt='' />
              <img src={VisaIc} alt='' />
            </span>
          </label>
        </div>
        <button type='submit' className='btn btn-lg btn-block btn-outline-success rounded-pill'>
          Оплатить
        </button>
        <Link to='/' onClick={() => dispatch({ type: 'CHANGE_FORM_STAGE', payload: 2 })}>
          Назад
        </Link>
      </form>
    </div>
  );
}

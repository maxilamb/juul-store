import React, { useContext } from 'react';
import cx from 'classnames';
import Context from '../../../context';
import productBlack from './img/black.png';
import productGray from './img/gray.png';
import productRed from './img/red.png';
import productBlue from './img/blue.png';
import productGold from './img/gold.png';
import './style.sass';

function getImage(selectedColor) {
  switch (selectedColor) {
    case 'black':
      return productBlack;
    case 'gray':
      return productGray;
    case 'blue':
      return productBlue;
    case 'red':
      return productRed;
    default:
      return productGold;
  }
}

export default function StepFirst() {
  const {
    store: { amount, selectedColor },
    dispatch,
  } = useContext(Context);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: 'CHANGE_FORM_STAGE',
          payload: 2,
        });
      }}
    >
      <div className='product-color pb-4'>
        <img src={getImage(selectedColor)} alt={`product ${selectedColor}`} />
        <h6>Выберите цвет вашего Juul W01</h6>
        <ul className='choice-of-color'>
          <li
            onClick={() => dispatch({ type: 'CHANGE_COLOR', payload: 'black' })}
            className={cx({ active: selectedColor === 'black' })}
            aria-hidden='true'
          />
          <li
            onClick={() => dispatch({ type: 'CHANGE_COLOR', payload: 'gray' })}
            className={cx({ active: selectedColor === 'gray' })}
            aria-hidden='true'
          />
          <li
            onClick={() => dispatch({ type: 'CHANGE_COLOR', payload: 'blue' })}
            className={cx({ active: selectedColor === 'blue' })}
            aria-hidden='true'
          />
          <li
            onClick={() => dispatch({ type: 'CHANGE_COLOR', payload: 'red' })}
            className={cx({ active: selectedColor === 'red' })}
            aria-hidden='true'
          />
          <li
            onClick={() => dispatch({ type: 'CHANGE_COLOR', payload: 'gold' })}
            className={cx({ active: selectedColor === 'gold' })}
            aria-hidden='true'
          />
        </ul>
      </div>
      <div>
        <div className='input-group mb-3 input-group-lg'>
          <div className='input-group-prepend'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={() => dispatch({ type: 'DECREMENT' })}
            >
              －
            </button>
          </div>
          <input
            type='number'
            className='form-control'
            placeholder='Количество'
            min={1}
            value={amount}
            onChange={(e) => dispatch({ type: 'CHANGE_AMOUNT', payload: +e.target.value })}
          />
          <div className='input-group-append'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={() => dispatch({ type: 'INCREMENT' })}
            >
              ＋
            </button>
          </div>
        </div>
        <button
          className='btn btn-outline-danger btn-lg btn-block rounded-pill action'
          type='submit'
        >
          Далее
        </button>
      </div>
    </form>
  );
}

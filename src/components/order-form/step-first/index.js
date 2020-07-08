import React, { useContext } from 'react';
import cx from 'classnames';
import Context from '../../../context';
import './style.sass';

function StepFirst() {
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
      <div className='product-color'>
        <h6>Выберите цвет вашего Juul</h6>
        <ul className='choice-of-color'>
          <li
            onClick={() => dispatch({ type: 'CHANGE_COLOR', payload: 'black' })}
            className={cx({ active: selectedColor === 'black' })}
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
      <h5>Количество</h5>
      <div className='input-group mb-3'>
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
      <button className='btn btn-outline-dark btn-lg btn-block rounded-pill px-5' type='submit'>
        Купить
      </button>
    </form>
  );
}

export default StepFirst;

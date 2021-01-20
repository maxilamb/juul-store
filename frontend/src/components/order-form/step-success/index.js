import React, { useContext } from 'react';
import Context from '../../../context';
import checkedIcon from './checked.svg';
import './style.sass';

function StepSuccess() {
  const { dispatch } = useContext(Context);
  return (
    <div className='step-three'>
      <form
        onSubmit={() => {
          dispatch({
            type: 'CHANGE_FORM_STAGE',
            payload: 1,
          });
        }}
      >
        <img className='checked-image' src={checkedIcon} alt='checked' />
        <h3 className='text-center'>
          Спасибо за заказ, мы отправим вам письмо на указаный email в ближайшее время
          <span role='img' aria-label='heart'>
            💗
          </span>
        </h3>
        <div className='form-group'>
          <button
            type='submit'
            className='btn btn-outline-success btn-lg btn-block rounded-pill action'
          >
            Заказать ещё
          </button>
        </div>
      </form>
    </div>
  );
}

export default StepSuccess;

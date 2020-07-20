import React, { useContext } from 'react';
import Context from '../../../context';
import ImgStickerWebp from './sticker.webp';
import ImgStickerJpg from './sticker.jpg';

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
        <h3>
          Спасибо что заказали JUUL, мы скоро свяжемся с вами
          <span role='img' aria-label='heart'>
            💗
          </span>
        </h3>
        <picture>
          <source srcSet={ImgStickerJpg} />
          <img className='w-100' src={ImgStickerWebp} alt='sticker' />
        </picture>
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

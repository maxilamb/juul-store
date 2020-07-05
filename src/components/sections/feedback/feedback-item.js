import React from 'react';
import PropTypes from 'prop-types';

export default function FeedbackItem({ fullname, date, comment }) {
  return (
    <div className='feedback-item'>
      <div className='header'>
        <h3>{fullname}</h3>
        <small className='text-muted'>{date}</small>
      </div>
      <div className='body'>
        <p>{comment}</p>
      </div>
      <div className='footer'>
        <h5>Вам помог этот отзыв?</h5>
        <button type='submit' className='btn btn-outline-secondary mr-3'>
          Да (123)
        </button>
        <button type='submit' className='btn btn-outline-secondary ml-3'>
          Нет (32)
        </button>
      </div>
    </div>
  );
}

FeedbackItem.propTypes = {
  fullname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

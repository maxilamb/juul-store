import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default function FeedbackItem({ _id: id, fullname, date, comment, pool }) {
  const [votes, setPool] = useState(pool);

  const { yes, no } = votes;

  const sendVote = (vote) => {
    axios.put('/api/v1/review', {
      id,
      vote,
    });
    vote === 'yes'
      ? setPool((s) => ({ ...s, yes: s.yes + 1 }))
      : setPool((s) => ({ ...s, no: s.no + 1 }));
  };

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
        <button
          type='button'
          onClick={() => sendVote('yes')}
          className='btn btn-outline-secondary mr-3'
        >
          Да ({yes})
        </button>
        <button
          type='submit'
          onClick={() => sendVote('no')}
          className='btn btn-outline-secondary ml-3'
        >
          Нет ({no})
        </button>
      </div>
    </div>
  );
}

FeedbackItem.propTypes = {
  _id: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  pool: PropTypes.shape({
    yes: PropTypes.number.isRequired,
    no: PropTypes.number.isRequired,
  }).isRequired,
};

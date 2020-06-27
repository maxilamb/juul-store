import React from 'react';
import PropTypes from 'prop-types';
import './style.sass';

function Article({ header, text, muted = false, center }) {
  const hClassName = center ? 'text-center' : '';
  const pClassName = muted ? 'text-muted' : '';
  return (
    <div className='article'>
      <h3 className={hClassName}>{header}</h3>
      <p className={pClassName}>{text}</p>
    </div>
  );
}

Article.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  center: PropTypes.bool,
  muted: PropTypes.bool,
};

export default Article;

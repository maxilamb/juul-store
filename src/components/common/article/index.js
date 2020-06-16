import React from 'react';
import PropTypes from 'prop-types';
import './style.sass';

function Article({ header, text, muted = false}) {
  const pClassName = muted ? 'text-muted' : '';
  return (
    <div className='article'>
      <h3>{header}</h3>
      <p className={pClassName}>{text}</p>
    </div>
  );
}

Article.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  muted: PropTypes.bool
};

export default Article;

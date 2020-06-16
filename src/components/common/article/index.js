import React from 'react';
import PropTypes from 'prop-types';

function Article({ header, text, muted = false, center = false, right = false }) {
  const pClassName = muted ? 'text-muted' : '';
  const textPosition = center ? 'text-center' : right ? 'text-right' : 'text-left';
  return (
    <div className={`article ${textPosition}`}>
      <h3>{header}</h3>
      <p className={pClassName}>{text}</p>
    </div>
  );
}

Article.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  muted: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
};

export default Article;

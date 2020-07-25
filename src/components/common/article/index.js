import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.sass';

function Article({ header, text, muted = false, center }) {
  return (
    <div className='article'>
      <h3
        className={cx({
          'text-center': center,
        })}
      >
        {header}
      </h3>
      <p
        className={cx({
          'text-muted': muted,
          'text-center': center,
        })}
      >
        {text}
      </p>
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

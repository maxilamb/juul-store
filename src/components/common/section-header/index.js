import React from 'react';
import PropTypes from 'prop-types';
import './style.sass';

function SectionHeader({ header, text }) {
  return (
    <div className='section-header'>
      <h2 className='title'>{header}</h2>
      <p className='slogan'>{text}</p>
    </div>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

export default SectionHeader;

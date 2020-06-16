import React from 'react';
import PropTypes from 'prop-types';

function SectionHeader({ header, text }) {
  return (
    <div className='section-header text-center'>
      <h2 className='display-4'>{header}</h2>
      <p className='text-muted'>{text}</p>
    </div>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
};

export default SectionHeader;

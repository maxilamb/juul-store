import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Link as AnchorLink } from 'rc-scroll-anim';

export default function NavLink({ children, rootTo, to, clickHandler, className }) {
  const {
    location: { pathname },
  } = window;
  if (pathname === '/')
    return (
      <AnchorLink component='a' href='/' className={className} onClick={clickHandler} to={rootTo}>
        {children}
      </AnchorLink>
    );
  return (
    <Link className={className} onClick={clickHandler} to={to}>
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  children: PropTypes.array || PropTypes.string,
  rootTo: PropTypes.string,
  to: PropTypes.string,
  clickHandler: PropTypes.func,
  className: PropTypes.string,
};

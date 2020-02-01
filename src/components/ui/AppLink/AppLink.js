import React from 'react';
import './AppLink.sass';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const AppLink = ({ className, to, children, color }) => {
  if (!to) {
    return null;
  } else if (to.match(/^(http(s)?|ftp):\/\//)) {
    return (
      <a
        href={to}
        target='_blank'
        rel='noopener noreferrer nofollow'
        className={classnames('link', className, `link_color_${color}`)}>
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} className={classnames('link', className, `link_color_${color}`)}>
        {children}
      </Link>
    );
  }
};

AppLink.defaultProps = {
  color: 'blue',
};

export default AppLink;

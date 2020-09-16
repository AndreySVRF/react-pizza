import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ className, outline, onClick, children }) => {
  return (
    <button
      className={classNames('button', className, {
        'buttton--outline': outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;

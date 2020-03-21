import React from 'react';

const Icon = props => {
  const { iconClass, icon, onClick = null } = props;

  return (
    <button className={`modal-icon ${iconClass}`} onClick={onClick}>
      <svg>
        <use xlinkHref={`#${icon}`} />
      </svg>
    </button>
  );
};

export default Icon;

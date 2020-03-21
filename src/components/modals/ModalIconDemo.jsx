import React from 'react';
import ModalIcons from './ModalIcons';
import Icon from './Icon';
import './styles/modal-icon.scss';

const ModalIconDemo = () => {
  const btnTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  const icons = ['refresh', 'settings', 'add', 'remove', 'edit', 'bin', 'close'];

  const echoIcon = icon => {
    const msg = `You have clicked "${icon}" button`;
    console.log(msg);
    alert(msg);
  };

  return (
    <div className='modal-icons'>
      <ModalIcons />
      <h2>Available Icons: </h2>
      {icons.map((iconID, index) => {
        return (
          <div className='modal-demo-set' key={`mds-${index}`}>
            {btnTypes.map((type, index) => (
              <Icon key={`mic-${index}`} iconClass={`mi-${type}`} icon={`modal-${iconID}`} onClick={() => echoIcon(iconID)} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ModalIconDemo;

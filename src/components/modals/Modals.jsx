import React, { Fragment } from 'react';
import ModalIconDemo from './ModalIconDemo';
import Modal from './Modal';

const Modals = () => {
  const dummyModals = [1, 2, 3, 4, 5, 6];

  return (
    <Fragment>
      <ModalIconDemo />
      {dummyModals.map((modal, index) => (
        <Modal key={index} modal={modal} />
      ))}
    </Fragment>
  );
};

export default Modals;

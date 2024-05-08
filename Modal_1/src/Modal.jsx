import React from 'react';
import useModal from './useModal';

const Modal = ({title, text}) => {
  const modal = useModal();

  return (
    <div>
      <button onClick={modal.openModal}>{title? title:(modal.isOpen ? "모달 닫기":"모달 열기")}</button>
      {modal.isOpen && (
        <div>
          <div>
            <p>{text}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;

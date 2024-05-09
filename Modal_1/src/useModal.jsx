import { useState } from 'react';

function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  }

  return {
    isOpen,
    openModal
  };
}

export default useModal;

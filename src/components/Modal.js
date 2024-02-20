import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px; /* Tamaño máximo del modal */
  margin: 20px auto;
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
`;

const modalImageStyles = css`
  max-width: 100%;
  height: auto;
`;

const Modal = ({ imageUrl, onClose }) => {
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <ModalImage css={modalImageStyles} src={imageUrl} alt="" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

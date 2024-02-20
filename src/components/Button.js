import React from 'react';
import { Buton } from './Styles.Styled';

const Button = ({ onClick }) => {
  return (
    <Buton className="button" onClick={onClick}>
      Load more
    </Buton>
  );
};

export default Button;

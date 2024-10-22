import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  background-color: ${({ type }) =>
    type === 'primary' ? 'hsl(171, 66%, 44%)' : type === 'secondary' ? 'hsl(233, 100%, 69%)' : 'white'};
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 20px;
  width: 150px;

  box-shadow: ${({ type }) =>
    type === 'primary'
      ? '0 4px 6px rgba(0, 178, 145, 0.4)'
      : type === 'secondary'
      ? '0 4px 6px rgba(131, 96, 195, 0.4)'
      : '0 4px 6px rgba(0, 0, 0, 0.1)'};

  &:hover {
    box-shadow: ${({ type }) =>
      type === 'primary'
        ? '0 6px 8px rgba(0, 178, 145, 0.6)'
        : type === 'secondary'
        ? '0 6px 8px rgba(131, 96, 195, 0.6)'
        : '0 6px 8px rgba(0, 0, 0, 0.2)'};
  }
`;

function Button({ type, children }) {
  return <StyledButton type={type}>{children}</StyledButton>;
}

export default Button;

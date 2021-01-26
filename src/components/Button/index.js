import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryButton};
  border: 1px solid ${({ theme }) => theme.colors.primaryButton};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;
  display: block;
  padding: 8px;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ButtonWrapper {...otherProps}>
    {children}
  </ButtonWrapper>
);

export default Button;

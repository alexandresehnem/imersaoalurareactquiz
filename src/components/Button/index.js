import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
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
    opacity: 0.6;
  }
`;

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ButtonWrapper {...otherProps}>
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;

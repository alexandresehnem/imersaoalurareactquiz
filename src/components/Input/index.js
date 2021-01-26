import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  display: block;
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
`;

const Input = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <InputWrapper {...props} />
);

export default Input;

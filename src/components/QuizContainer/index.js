import React from 'react';
import styled from 'styled-components';

const QuizContainerElement = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

// eslint-disable-next-line react/prop-types
export default function QuizContainer({ children }) {
  return (
    <QuizContainerElement>
      {children}
    </QuizContainerElement>
  );
}

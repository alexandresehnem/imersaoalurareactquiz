import React from 'react';
import { Lottie } from '@crello/react-lottie';

import loadingBasketAnimation from './animation-basket.json';
import loadingDefaultAnimation from './animation-default.json';

import Widget from '../Widget';

function LoadingWidget({ myQuiz }) {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        <Lottie
          className="lottie-container basic"
          config={{
            animationData: (myQuiz ? loadingBasketAnimation : loadingDefaultAnimation),
            loop: true,
            autoplay: true,
          }}
        />
      </Widget.Content>
    </Widget>
  );
}

export default LoadingWidget;

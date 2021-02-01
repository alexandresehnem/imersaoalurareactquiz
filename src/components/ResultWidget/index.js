import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';
import BackLinkArrow from '../BackLinkArrow';

function ResultWidget({ results }) {
  const total = results.length;
  // eslint-disable-next-line radix
  const half = parseInt(total / 2);
  const corrects = results.filter((x) => x).length;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        Tela de Resultado:
      </Widget.Header>

      <Widget.Content>
        <h2>
          Você acertou
          {' '}
          {corrects}
          {' '}
          de
          {' '}
          {total}
          {' '}
          perguntas
        </h2>
        { total === corrects && <p>Parabéns! você acertou todas as respostas.</p>}
        { total !== corrects && corrects > half
          && <p>Por pouco! você foi muito bem, tente novamente.</p>}
        { total !== corrects && corrects <= half && <p>Que pena! tente novamente.</p>}
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  results: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default ResultWidget;

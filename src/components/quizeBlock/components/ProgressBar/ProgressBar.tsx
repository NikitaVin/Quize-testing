import React, { FC } from 'react';
import { Conteiner, Progress, ProgressText } from './ProgressBar.styles';
import { useSelector } from 'react-redux';
import { questinosSelector } from '../../../../redux/slices/questionSlice';

interface IProgressBar {
  step: number;
}

export const ProgressBar: FC<IProgressBar> = ({ step }) => {
  const { questions } = useSelector(questinosSelector);

  const percatage = Math.round((step / questions.items.length) * 100);

  return (
    <>
      <Conteiner>
        <Progress style={{ width: `${percatage}%` }}></Progress>
      </Conteiner>
      <ProgressText>
        <span>
          Вопрос {step + 1} из {questions.items.length}
        </span>
      </ProgressText>
    </>
  );
};

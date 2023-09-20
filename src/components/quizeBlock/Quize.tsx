import React, { FC } from 'react';
import { Answers } from './components/Answers/Answers';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import { Question } from './components/Question/Question';
import { Wrapper } from './Quize.styles';
import { IItems } from '../../redux/slices/questionSlice';
import { useSelector } from 'react-redux';
import { IAnswer, selectorAnswer } from '../../redux/slices/answerSlice';
import { MyButton } from '../Button/Button';

interface IQuize {
  question: IItems;
  onClickAnswer: (userVariants: IAnswer[]) => void;
  step: number;
}

export const Quize: FC<IQuize> = ({ question, onClickAnswer, step }) => {
  const { answer } = useSelector(selectorAnswer);
  const varinat = question.variants;
  return (
    <Wrapper data-testid="quize-test">
      <ProgressBar step={step} />
      <Question question={question} />
      {varinat.map((text) => {
        return <Answers key={text} text={text} question={question} />;
      })}

      <MyButton onClick={() => onClickAnswer(answer)} text="Ответить" />
    </Wrapper>
  );
};

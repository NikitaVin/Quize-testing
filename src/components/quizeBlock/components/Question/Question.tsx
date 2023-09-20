import React, { FC } from 'react';
import { Wrapper } from './Question.styles';
import { IItems } from '../../../../redux/slices/questionSlice';

interface IQuestion {
  question: IItems;
}

export const Question: FC<IQuestion> = ({ question }) => {
  return <Wrapper data-testid="question-test">{question.title}</Wrapper>;
};

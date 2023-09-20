import { screen, render } from '@testing-library/react';
import { Question } from './Question';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

const question = {
  id: '0',
  correct: 0,
  dificulty: 'easy',
  title: 'Кто создал платформу цифровой дистрибуции Steam?',
  variants: ['Valve', 'Pixeltail Games', 'Ubisoft', 'Electronic Arts'],
};

describe('Questions component', () => {
  it('Questions shoud be render', () => {
    render(
      <Provider store={store}>
        <Question question={question} />
      </Provider>
    );
    const questionElement = screen.getByTestId('question-test');
    expect(questionElement).toBeInTheDocument();
    expect(questionElement).toHaveTextContent('Кто создал платформу цифровой дистрибуции Steam?');
  });
});

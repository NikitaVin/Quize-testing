import { screen, render } from '@testing-library/react';
import { FullInfoResults } from './FullInfoResults';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';

const yourAnswersArr: string[] = [
  'Valve',
  'Alexander Flemming',
  'Сатурн, Меркурий',
  'Scripting Language',
  'Clipper Chip',
  'Ford',
  'A Moon Shaped Pool',
  '1867',
  'Prodigy',
];

describe('FulInfoResults component', () => {
  it('FulInfoResults shoud be render', () => {
    render(
      <Provider store={store}>
        <FullInfoResults yourAnswersArr={yourAnswersArr} />
      </Provider>
    );
    const FulInfoResultsElement = screen.getByTestId('fulInfoResults-test');
    expect(FulInfoResultsElement).toBeInTheDocument();
  });
});

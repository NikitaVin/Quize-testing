import styled from '@emotion/styled';

export const ResultsWrapper = styled.div({
  display: 'flex',
  overflowY: 'scroll',
  width: '80%',
});

export const ResultsList = styled.ul({
  padding: '0',
  width: '100%',
});

export const ResultsTrue = styled.li({
  background: 'rgb(240, 240, 240)',
  padding: '1% 0% 1% 1%',
  margin: '2% 5% 2% 0',
  borderRadius: '8px',
  border: 'green 2px solid',
  alignItems: 'center',
});

export const ResultsFalse = styled.li({
  background: 'rgb(240, 240, 240)',
  padding: '1% 0% 1% 1%',
  margin: '2% 5% 2% 0',
  borderRadius: '8px',
  border: 'red 2px solid',
});

import styled from '@emotion/styled';

export const DivApp = styled.main<{ openFullResult: boolean }>(
  {
    backgroundColor: 'rgb(131,58,180)',
    background:
      'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  },
  ({ openFullResult }) => ({
    padding: openFullResult ? '50px 0' : '0',
  })
);

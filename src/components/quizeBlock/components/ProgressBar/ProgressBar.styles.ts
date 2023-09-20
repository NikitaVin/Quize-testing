import styled from '@emotion/styled';

export const Conteiner = styled.div({
  height: '5%',
  borderRadius: '30px',
  backgroundColor: 'rgb(232, 232, 232)',
  marginBottom: '25px',
  position: 'relative',
});

export const Progress = styled.div({
  position: 'absolute',
  height: '100%',
  borderRadius: '30px',
  transition: 'all 0.3s ease-in-out',
  backgroundColor: 'rgb(131,58,180)',
  background:
    'linear-gradient(270deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
});

export const ProgressText = styled.p({
  fontSize: '18px',
});

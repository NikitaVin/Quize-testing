import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FC } from 'react';

interface IMyButton {
  text: string;
  onClick: () => void;
}

export const MyButton: FC<IMyButton> = ({ onClick, text }) => {
  return (
    <Stack spacing={2} direction="row">
      <Button onClick={onClick} variant="outlined">
        {text}
      </Button>
    </Stack>
  );
};

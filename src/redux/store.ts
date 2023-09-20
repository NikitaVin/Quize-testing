import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import questionSlice from './slices/questionSlice';
import answerSlice from './slices/answerSlice';

export const store = configureStore({
  reducer: {
    questions: questionSlice,
    answer: answerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

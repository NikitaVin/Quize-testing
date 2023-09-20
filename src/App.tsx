import { FC, useState, useEffect } from 'react';
import { GlobalStyles } from './styles/global.styles';
import { DivApp } from './App.styles';
import { useAppDispatch } from './redux/store';
import { getAsyncQuestions, questinosSelector } from './redux/slices/questionSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Finish } from './components/finishBlock/Finish';
import { Quize } from './components/quizeBlock/Quize';
import { IAnswer, clearFullAnswer } from './redux/slices/answerSlice';

const App: FC = () => {
  const appDispatch = useAppDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    appDispatch(getAsyncQuestions());
  }, [appDispatch]);

  const { questions } = useSelector(questinosSelector);

  const [step, setStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const question = questions.items[step];
  const [yourAnswersArr, setYourAnswersArr] = useState<string[]>([]);

  const onClickAnswer = (userVariants: IAnswer[]) => {
    if (!userVariants.length) {
      alert('Выберите вариант ответа');
    } else if (Array.isArray(question.correct) && userVariants.length < 2) {
      alert('Минимум 2 варианта ответа');
    } else {
      if (userVariants.length === 1 && typeof question.correct === 'number') {
        if (userVariants[0].variant === question.variants[question.correct]) {
          setTotalScore(totalScore + 1);
        }
        setYourAnswersArr([...yourAnswersArr, userVariants[0].variant]);
      }
      if (userVariants.length > 1 && Array.isArray(question.correct)) {
        if (
          (userVariants[0].variant === question.variants[question.correct[0]] &&
            userVariants[1].variant === question.variants[question.correct[1]]) ||
          (userVariants[0].variant === question.variants[question.correct[1]] &&
            userVariants[1].variant === question.variants[question.correct[0]])
        ) {
          setTotalScore(totalScore + 1);
        }
        const multiVariants = userVariants.map((el) => ((el as unknown) = el.variant));
        setYourAnswersArr([...yourAnswersArr, multiVariants.join(', ')]);
      }
      dispatch(clearFullAnswer());
      setStep(step + 1);
    }
  };

  const [openFullResult, setOpenFullResult] = useState(false);

  const onClickRestart = () => {
    setYourAnswersArr([]);
    setStep(0);
    setTotalScore(0);
    setOpenFullResult(false);
  };

  const onClickOpenFullResult = () => {
    setOpenFullResult(!openFullResult);
  };

  return (
    <DivApp openFullResult={openFullResult} data-testid="app-test1">
      <GlobalStyles />
      {questions.status === 'loaded' ? (
        step !== questions.items.length ? (
          <Quize
            data-testid="Quize-elem"
            step={step}
            onClickAnswer={onClickAnswer}
            question={question}
          />
        ) : (
          <Finish
            yourAnswersArr={yourAnswersArr}
            openFullResult={openFullResult}
            onClickOpenFullResult={onClickOpenFullResult}
            onClickRestart={onClickRestart}
            totalScore={totalScore}
          />
        )
      ) : (
        'Loading'
      )}
    </DivApp>
  );
};

export default App;

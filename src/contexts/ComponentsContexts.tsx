import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useCookies } from 'react-cookie';
import LanguageScreen from "../components/Language";

import Menu from "../components/Menu";
import ScoreModal from "../components/ScoreModal";
import ScoreScreen from "../components/ScoreScreen";
import Start from "../components/Start";
import ThemeScreen from "../components/Theme";

import './context.css';

interface ComponentsContextsData {
  hitsTotal: number;
  missTotal: number;
  score: number;
  words: number;
  isStart: boolean;
  language: string;
  theme: string;
  openMenu: () => void;
  openScore: () => void;
  openLanguage: () => void;
  openTheme: () => void;
  startTyping: () => void;
  closeScoreModal: () => void;
  changeLanguage: (value: string) => void;
  upTime: (time: number) => void;
  changeTheme: (value: string) => void;
  updateInfo: (hit: number, miss: number) => void;
}

interface ComponentsProviderProps {
  children: ReactNode;
  hitsTotal: number;
  missTotal: number;
  words: number;
  score: number;
}

export const ComponentsContexts = createContext({} as ComponentsContextsData);

export function ComponentsProvider({ children }: ComponentsProviderProps) {

  const [cookies, setCookies] = useCookies(['hitsTotal', 'missTotal', 'words', 'score', 'time'])
  
  const [isStart, setIsStart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScoreModalOpen, setIsScoreModalOpen] = useState(false);
  const [isOpenScore, setIsOpenScore] = useState(false);
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const [isOpenTheme, setIsOpenTheme] = useState(false);

  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('pink');
  const [count, setCount] = useState(4);

  const [hitsLocal, setHitsLocal] = useState<number>(0);
  const [missLocal, setMissLocal] = useState<number>(0);
  const [timeLocal, setTimeLocal] = useState<number>(0);
  const [hitsTotal, setHitsTotal] = useState<number>(Number(cookies.hitsTotal ?? 0));
  const [missTotal, setMissTotal] = useState<number>(Number(cookies.missTotal ?? 0));
  const [time, setTime] = useState<number>(Number(cookies.time ?? 0));
  const [words, setWords] = useState<number>(Number(cookies.words ?? 0));
  const [score, setScore] = useState<number>(Number(cookies.score ?? 0));

  function changeTheme(themeValue: string) {
    setTheme(themeValue);
  }

  function openTheme() {
    setIsOpenTheme(!isOpenTheme);
    setIsMenuOpen(!isMenuOpen);
  }

  function openLanguage() {
    setIsOpenLanguage(!isOpenLanguage);
    setIsMenuOpen(!isMenuOpen);
  }

  function openScore() {
    setIsOpenScore(!isOpenScore);
    setIsMenuOpen(!isMenuOpen);
  }

  function changeLanguage(value: string) {
    setLanguage(value);
    console.log(language);
  }

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function startTyping() {
    setIsStart(!isStart)
  }

  function upTime(time: number) {
    setTimeLocal(time);
  }

  function handleSetCookie() {
    setCookies('hitsTotal', hitsTotal as number, { path: '/'});
    setCookies('missTotal', missTotal as number, { path: '/'});
    setCookies('words', words as number, { path: '/'});
    setCookies('score', score as number, { path: '/'});
    setCookies('time', time as number, { path: '/'});
  }

  function updateInfo(hitValue: number, missValue: number) {
    setHitsLocal(hitValue);
    setMissLocal(missValue);
    setHitsTotal(hitsTotal + hitValue);
    setMissTotal(missTotal + missValue);
    setTime(time + timeLocal);
    setWords(words + hitValue + missValue);
    let scoreVar = cookies.hitsTotal/cookies.words;
    setScore(scoreVar);
    setIsScoreModalOpen(true);
    startTyping();
  }

  function closeScoreModal() {
    setIsScoreModalOpen(false);
  }

  useEffect(() => {
    handleSetCookie();
    // eslint-disable-next-line
  }, [words])

  function setCountFunction() {
    setCount(count - 1);
  }

  function startCount() {
    if(count !== 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000)
    } else {
      startTyping();
      setCount(4);
    }
  } 

  useEffect(() => {
    if(count <= 3) {
      startCount();
    }
    // eslint-disable-next-line
  }, [count])

  return (
    <ComponentsContexts.Provider
      value={{
        hitsTotal,
        missTotal,
        score,
        words,
        isStart,
        language,
        theme,
        upTime,
        openLanguage,
        openScore,
        changeLanguage,
        startTyping,
        changeTheme,
        updateInfo,
        openTheme,
        closeScoreModal,
        openMenu
      }}
    >
      <div className={`app-${theme}`}>
        {children}
      </div>
      {isOpenTheme && <ThemeScreen />}
      {isOpenLanguage && <LanguageScreen />}
      {isOpenScore && <ScoreScreen />}
      {!isStart && !isOpenScore && !isOpenLanguage && !isOpenTheme && <Start count={count} startCount={setCountFunction}/>}
      {isScoreModalOpen && <ScoreModal hits={hitsLocal} miss={missLocal} time={timeLocal}/>}
      {isMenuOpen && <Menu/>}
    </ComponentsContexts.Provider>
  )
}
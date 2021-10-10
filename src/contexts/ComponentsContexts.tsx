import React, { createContext, useState } from "react";
import Menu from "../components/Menu";

interface ComponentsContextsData {
  score: number;
  words: number;
  openMenu: () => void;
  setHitsFunction: (value: number) => void;
  setMissFunction: (value: number) => void;
  updateScore: (value: number) => void;
}

export const ComponentsContexts = createContext({} as ComponentsContextsData);

export function ComponentsProvider({ children, ...rest }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hits, setHits] = useState(rest.hits ?? 0);
  const [miss, setMiss] = useState(rest.miss ?? 0);
  const [words, setWords] = useState(rest.words ?? 0);
  const [score, setScore] = useState(rest.score ?? 0);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function setHitsFunction(value: number) {
    setHits(hits + value);
  }
  
  function setMissFunction(value: number) {
    setMiss(miss + value);
  }

  function updateScore() {
    let total = hits + miss;
    setWords(words + total);
    setScore(hits/words);
  }

  return (
    <ComponentsContexts.Provider
      value={{
        score,
        words,
        updateScore,
        setHitsFunction,
        setMissFunction,
        openMenu
      }}
    >
      {children}
      {isMenuOpen && <Menu/>}
    </ComponentsContexts.Provider>
  )
}
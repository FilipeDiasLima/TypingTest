import React, { useContext, useEffect, useRef, useState } from "react";
import { MdKeyboardBackspace } from 'react-icons/md';
import { IoReturnDownBackOutline, IoLogoWindows } from 'react-icons/io5';
import { ComponentsContexts } from '../../contexts/ComponentsContexts';

import './keyboard.css';

import dataEn from '../../utils/words-en.json';
import dataPtbr from '../../utils/words-ptbr.json';

let words: string[] = []

type InputEvent = React.KeyboardEvent<HTMLInputElement>;

function Keyboard() {
  const textInput = useRef<HTMLInputElement>(null);

  const { updateInfo, isStart, language, theme } = useContext(ComponentsContexts);

  const [keyPressed, setKeyPressed] = useState('');
  const [inputText, setInputText] = useState('');
  const [textTest, setTextTest] = useState<String[]>([]);
  const [inputTextLegth, setInputTextLength] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [hits, setHits] = useState(0);
  const [miss, setMiss] = useState(0);

  const handleKeyPressed = (event: InputEvent): void => {
    setKeyPressed(event.key);
  }

  function randomWords() {
    words = [];
    let cont = 0;
    while(cont < 20) {
      let index = Math.floor(Math.random() * 341);
      console.log(language)
      if (language === 'en') {
        words.push(dataEn[0].words[index].toLowerCase()); 
      } else if (language === 'ptbr') {
        words.push(dataPtbr[0].words[index].toLowerCase()); 
      }
      cont+=1;
    }
  }

  useEffect(() => {
    randomWords();
    if (inputText.length < inputTextLegth) {
      setKeyPressed('Backspace');
    }
    setTextTest(words);
    setInputTextLength(inputText.length);
    // eslint-disable-next-line
  }, [language]);
    
  useEffect(() => {
    if(isStart) {
      if(textInput && textInput.current) {
        textInput.current.focus();
      }
      if (keyPressed === ' ' || keyPressed === 'Enter') {
        if (textTest[wordIndex] === inputText) {
          setHits(hits + 1);
        } else {
          setMiss(miss + 1);
        }
        setInputText('');
        setWordIndex(wordIndex + 1);
        setKeyPressed('q');
      }
  
      if ((wordIndex >= textTest.length) && textTest.length !== 0) {
        updateInfo(hits, miss);
        setHits(0);
        setMiss(0);
        setWordIndex(0);
        randomWords();
        setTextTest(words);
        setInputText('');
      }
    }
    // eslint-disable-next-line
  }, [keyPressed, isStart]);

  return (
    <div className='container-geral'>
      <div>
        {textTest.map((word,index) => 
          index === wordIndex ? (
            <span key={index} className={`textFocus-${theme}`}>{word} </span>
          ) : (
            <span key={index} className={`text-${theme}`}>{word} </span>
          ) 
        )}
      </div>
      <input 
        placeholder='Write here...' 
        className={`input-text-${theme}`}
        ref={textInput}
        type="text" 
        onKeyPress={handleKeyPressed}
        value={isStart === true ? inputText : ''}
        onChange={(e) => {
          if(isStart) {
            setInputText(e.target.value.replace(/\s/g, ''));
          } else {
            setInputText('');
          }
        }} 
      />
      <div className={`key-container-${theme}`}>
        <div className='firstline'>
          {keyPressed === "'" || keyPressed === '"' ? (
            <div className={`key-pressed-${theme}`}>
              '"
            </div>
          ) : (
            <div className={`key-${theme}`}>
              '"
            </div>
          ) }
          {keyPressed === '1' || keyPressed === '!' ? (
            <div className={`key-pressed-${theme}`}>
              1!
            </div>
          ) : (
            <div className={`key-${theme}`}>
              1!
            </div>
          ) }
          {keyPressed === '2' || keyPressed === '@' ? (
            <div className={`key-pressed-${theme}`}>
              2@
            </div>
          ) : (
            <div className={`key-${theme}`}>
              2@
            </div>
          ) }
          {keyPressed === '3' || keyPressed === '#' ? (
            <div className={`key-pressed-${theme}`}>
              3#
            </div>
          ) : (
            <div className={`key-${theme}`}>
              3#
            </div>
          ) }
          {keyPressed === '4' || keyPressed === '$' ? (
            <div className={`key-pressed-${theme}`}>
              4$
            </div>
          ) : (
            <div className={`key-${theme}`}>
              4$
            </div>
          ) }
          {keyPressed === '5' || keyPressed === '%' ? (
            <div className={`key-pressed-${theme}`}>
              5%
            </div>
          ) : (
            <div className={`key-${theme}`}>
              5%
            </div>
          ) }
          {keyPressed === '6' || keyPressed === '¨' ? (
            <div className={`key-pressed-${theme}`}>
              6¨
            </div>
          ) : (
            <div className={`key-${theme}`}>
              6¨
            </div>
          ) }
          {keyPressed === '7' || keyPressed === '&' ? (
            <div className={`key-pressed-${theme}`}>
              7&
            </div>
          ) : (
            <div className={`key-${theme}`}>
              7&
            </div>
          ) }
          {keyPressed === '8' || keyPressed === '*' ? (
            <div className={`key-pressed-${theme}`}>
              8*
            </div>
          ) : (
            <div className={`key-${theme}`}>
              8*
            </div>
          ) }
          {keyPressed === '9' || keyPressed === '(' ? (
            <div className={`key-pressed-${theme}`}>
              9(
            </div>
          ) : (
            <div className={`key-${theme}`}>
              9(
            </div>
          ) }
          {keyPressed === '0' || keyPressed === ')' ? (
            <div className={`key-pressed-${theme}`}>
              0)
            </div>
          ) : (
            <div className={`key-${theme}`}>
              0)
            </div>
          ) }
          {keyPressed === '-' || keyPressed === '_' ? (
            <div className={`key-pressed-${theme}`}>
              -_
            </div>
          ) : (
            <div className={`key-${theme}`}>
              -_
            </div>
          ) }
          {keyPressed === '=' || keyPressed === '+' ? (
            <div className={`key-pressed-${theme}`}>
              =+
            </div>
          ) : (
            <div className={`key-${theme}`}>
              =+
            </div>
          ) }
          {keyPressed === 'Backspace' ? (
            <div className={`key-backspace-pressed-${theme}`}>
              <MdKeyboardBackspace size={30}/>
            </div>
          ) : (
            <div className={`key-backspace-${theme}`}>
            <MdKeyboardBackspace size={30}/>
          </div>
          ) }
        </div>

        <div className='firstline'>
          <div className={`key-tab-${theme}`}>
            Tab
          </div>
          {keyPressed === 'Q' || keyPressed === 'q' ? (
            <div className={`key-pressed-${theme}`}>
              Q
            </div>
          ) : (
            <div className={`key-${theme}`}>
              Q
            </div>
          ) }
          {keyPressed === 'W' || keyPressed === 'w' ? (
            <div className={`key-pressed-${theme}`}>
              W
            </div>
          ) : (
            <div className={`key-${theme}`}>
              W
            </div>
          ) }
          {keyPressed === 'E' || keyPressed === 'e' ? (
            <div className={`key-pressed-${theme}`}>
              E
            </div>
          ) : (
            <div className={`key-${theme}`}>
              E
            </div>
          ) }
          {keyPressed === 'R' || keyPressed === 'r' ? (
            <div className={`key-pressed-${theme}`}>
              R
            </div>
          ) : (
            <div className={`key-${theme}`}>
              R
            </div>
          ) }
          {keyPressed === 'T' || keyPressed === 't' ? (
            <div className={`key-pressed-${theme}`}>
              T
            </div>
          ) : (
            <div className={`key-${theme}`}>
              T
            </div>
          ) }
          {keyPressed === 'Y' || keyPressed === 'y' ? (
            <div className={`key-pressed-${theme}`}>
              Y
            </div>
          ) : (
            <div className={`key-${theme}`}>
              Y
            </div>
          ) }
          {keyPressed === 'U' || keyPressed === 'u' ? (
            <div className={`key-pressed-${theme}`}>
              U
            </div>
          ) : (
            <div className={`key-${theme}`}>
              U
            </div>
          ) }
          {keyPressed === 'I' || keyPressed === 'i' ? (
            <div className={`key-pressed-${theme}`}>
              I
            </div>
          ) : (
            <div className={`key-${theme}`}>
              I
            </div>
          ) }
          {keyPressed === 'O' || keyPressed === 'o' ? (
            <div className={`key-pressed-${theme}`}>
              O
            </div>
          ) : (
            <div className={`key-${theme}`}>
              O
            </div>
          ) }
          {keyPressed === 'P' || keyPressed === 'p' ? (
            <div className={`key-pressed-${theme}`}>
              P
            </div>
          ) : (
            <div className={`key-${theme}`}>
              P
            </div>
          ) }
          {keyPressed === '´' || keyPressed === '`' ? (
            <div className={`key-pressed-${theme}`}>
              `´
            </div>
          ) : (
            <div className={`key-${theme}`}>
              `´
            </div>
          ) }
          {keyPressed === '[' || keyPressed === '{' ? (
            <div className={`key-pressed-${theme}`}>
              {'[{'}
            </div>
          ) : (
            <div className={`key-${theme}`}>
              {'[{'}
            </div>
          ) }
          {keyPressed === "\\" || keyPressed === '|' ? (
            <div className={`key-backlash-pressed-${theme}`}>
              \|
            </div>
          ) : (
            <div className={`key-backlash-${theme}`}>
              \|
            </div>
          ) }
        </div>

        <div className='firstline'>
          <div className={`key-capslock-${theme}`}>
            Capslock
          </div>
          {keyPressed === 'A' || keyPressed === 'a' ? (
            <div className={`key-pressed-${theme}`}>
              A
            </div>
          ) : (
            <div className={`key-${theme}`}>
              A
            </div>
          ) }
          {keyPressed === 'S' || keyPressed === 's' ? (
            <div className={`key-pressed-${theme}`}>
              S
            </div>
          ) : (
            <div className={`key-${theme}`}>
              S
            </div>
          ) }
          {keyPressed === 'D' || keyPressed === 'd' ? (
            <div className={`key-pressed-${theme}`}>
              D
            </div>
          ) : (
            <div className={`key-${theme}`}>
              D
            </div>
          ) }
          {keyPressed === 'F' || keyPressed === 'f' ? (
            <div className={`key-pressed-${theme}`}>
              F
            </div>
          ) : (
            <div className={`key-${theme}`}>
              F
            </div>
          ) }
          {keyPressed === 'G' || keyPressed === 'g' ? (
            <div className={`key-pressed-${theme}`}>
              G
            </div>
          ) : (
            <div className={`key-${theme}`}>
              G
            </div>
          ) }
          {keyPressed === 'H' || keyPressed === 'h' ? (
            <div className={`key-pressed-${theme}`}>
              H
            </div>
          ) : (
            <div className={`key-${theme}`}>
              H
            </div>
          ) }
          {keyPressed === 'J' || keyPressed === 'j' ? (
            <div className={`key-pressed-${theme}`}>
              J
            </div>
          ) : (
            <div className={`key-${theme}`}>
              J
            </div>
          ) }
          {keyPressed === 'K' || keyPressed === 'k' ? (
            <div className={`key-pressed-${theme}`}>
              K
            </div>
          ) : (
            <div className={`key-${theme}`}>
              K
            </div>
          ) }
          {keyPressed === 'L' || keyPressed === 'l' ? (
            <div className={`key-pressed-${theme}`}>
              L
            </div>
          ) : (
            <div className={`key-${theme}`}>
              L
            </div>
          ) }
          {keyPressed === 'Ç' || keyPressed === 'ç' ? (
            <div className={`key-pressed-${theme}`}>
              Ç
            </div>
          ) : (
            <div className={`key-${theme}`}>
              Ç
            </div>
          ) }
          {keyPressed === '~' || keyPressed === '^' ? (
            <div className={`key-pressed-${theme}`}>
              ~^
            </div>
          ) : (
            <div className={`key-${theme}`}>
              ~^
            </div>
          ) }
          {keyPressed === ']' || keyPressed === '}' ? (
            <div className={`key-pressed-${theme}`}>
              {']}'}
            </div>
          ) : (
            <div className={`key-${theme}`}>
              {']}'}
            </div>
          ) }
          {keyPressed === "Enter" ? (
            <div className={`key-backspace-pressed-${theme}`}>
              <IoReturnDownBackOutline size={30}/>
            </div>
          ) : (
            <div className={`key-backspace-${theme}`}>
              <IoReturnDownBackOutline size={30}/>
            </div>
          ) }
        </div>
        
        <div className='firstline'>
          <div className={`key-shift-${theme}`}>
            Shift
          </div>
          {keyPressed === 'Z' || keyPressed === 'z' ? (
            <div className={`key-pressed-${theme}`}>
              Z
            </div>
          ) : (
            <div className={`key-${theme}`}>
              Z
            </div>
          ) }
          {keyPressed === 'X' || keyPressed === 'x' ? (
            <div className={`key-pressed-${theme}`}>
              X
            </div>
          ) : (
            <div className={`key-${theme}`}>
              X
            </div>
          ) }
          {keyPressed === 'C' || keyPressed === 'c' ? (
            <div className={`key-pressed-${theme}`}>
              C
            </div>
          ) : (
            <div className={`key-${theme}`}>
              C
            </div>
          ) }
          {keyPressed === 'V' || keyPressed === 'v' ? (
            <div className={`key-pressed-${theme}`}>
              V
            </div>
          ) : (
            <div className={`key-${theme}`}>
              V
            </div>
          ) }
          {keyPressed === 'B' || keyPressed === 'b' ? (
            <div className={`key-pressed-${theme}`}>
              B
            </div>
          ) : (
            <div className={`key-${theme}`}>
              B
            </div>
          ) }
          {keyPressed === 'N' || keyPressed === 'n' ? (
            <div className={`key-pressed-${theme}`}>
              N
            </div>
          ) : (
            <div className={`key-${theme}`}>
              N
            </div>
          ) }
          {keyPressed === 'M' || keyPressed === 'm' ? (
            <div className={`key-pressed-${theme}`}>
              M
            </div>
          ) : (
            <div className={`key-${theme}`}>
              M
            </div>
          ) }
          {keyPressed === ',' || keyPressed === '<' ? (
            <div className={`key-pressed-${theme}`}>
              {',<'}
            </div>
          ) : (
            <div className={`key-${theme}`}>
              {',<'}
            </div>
          ) }
          {keyPressed === '.' || keyPressed === '>' ? (
            <div className={`key-pressed-${theme}`}>
              {'.>'}
            </div>
          ) : (
            <div className={`key-${theme}`}>
              {'.>'}
            </div>
          ) }
          {keyPressed === ';' || keyPressed === ':' ? (
            <div className={`key-pressed-${theme}`}>
              ;:
            </div>
          ) : (
            <div className={`key-${theme}`}>
              ;:
            </div>
          ) }
          {keyPressed === '/' || keyPressed === '?' ? (
            <div className={`key-pressed-${theme}`}>
              /?
            </div>
          ) : (
            <div className={`key-${theme}`}>
              /?
            </div>
          ) }
          <div className={`key-shift-${theme}`}>
            Shift
          </div>
        </div>

        <div className='firstline'>
          {keyPressed === 'Ctrl' ? (
            <div className='key-ctrl-pressed'>
              Ctrl
            </div>
          ) : (
            <div className={`key-ctrl-${theme}`}>
              Ctrl
            </div>
          ) }
          <div className={`key-windows-${theme}`}>
            <IoLogoWindows size={20} />
          </div>
          {keyPressed === 'Alt' ? (
            <div className='key-ctrl-pressed'>
              Alt
            </div>
          ) : (
            <div className={`key-ctrl-${theme}`}>
              Alt
            </div>
          ) }
          {keyPressed === ' ' ? (
            <div className={`key-space-pressed-${theme}`}>
              SPACE
            </div>
          ) : (
            <div className={`key-space-${theme}`}>
              SPACE
            </div>
          ) }
          {keyPressed === 'Alt' ? (
            <div className='key-ctrl-pressed'>
              Alt
            </div>
          ) : (
            <div className={`key-ctrl-${theme}`}>
              Alt
            </div>
          ) }
          {keyPressed === 'Ctrl' ? (
            <div className='key-ctrl-pressed'>
              Ctrl
            </div>
          ) : (
            <div className={`key-ctrl-${theme}`}>
              Ctrl
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}

export default Keyboard;
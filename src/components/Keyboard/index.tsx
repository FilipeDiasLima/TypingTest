import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace } from 'react-icons/md'
import { IoReturnDownBackOutline, IoLogoWindows } from 'react-icons/io5'

import './keyboard.css';

import { calculateScore } from '../../utils/score';
import data from '../../utils/words.json';

type InputEvent = React.KeyboardEvent<HTMLInputElement>;

function Keyboard() {
  const [keyPressed, setKeyPressed] = useState('');
  const [inputText, setInputText] = useState('');
  const [textTest, setTextTest] = useState<String[]>([]);
  const [inputTextLegth, setInputTextLength] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [hits, setHits] = useState(0);
  const [miss, setMiss] = useState(0);

  let words: string[] = []

  data[0].words.map(word => 
    words.push(word)
  );

  const handleKeyPressed = (event: InputEvent): void => {
    setKeyPressed(event.key);
  }

  useEffect(() => {
    if (inputText.length < inputTextLegth) {
      setKeyPressed('Backspace');
    }
    setTextTest(words);
    setInputTextLength(inputText.length);
  }, [inputText, inputTextLegth]);
    
  useEffect(() => {
    if (keyPressed === ' ') {
      console.log('Test: ', textTest[wordIndex], '\nInput: ', inputText);
      if (textTest[wordIndex] === inputText) {
        setHits(hits + 1);
      } else {
        setMiss(miss + 1);
      }
      setInputText('');
      setWordIndex(wordIndex + 1);
    }

    if (wordIndex >= textTest.length) {
      console.log('CABO!');
      setWordIndex(0);
      console.log(calculateScore(hits, miss));
    }
  }, [keyPressed]);

  return (
    <div className='container-geral'>
      <div>
        {textTest.map((word,index) => 
          index === wordIndex ? (
            <span key={index} className='textFocus'>{word} </span>
          ) : (
            <span key={index} className='text'>{word} </span>
          ) 
        )}
      </div>
      <input 
        placeholder='Write here...' 
        className='input-text' 
        type="text" 
        onKeyPress={handleKeyPressed}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value) 
        }} 
      />
      <div className="key-container">
        <div className='firstline'>
          {keyPressed === "'" || keyPressed === '"' ? (
            <div className='key-pressed'>
              '"
            </div>
          ) : (
            <div className='key'>
              '"
            </div>
          ) }
          {keyPressed === '1' || keyPressed === '!' ? (
            <div className='key-pressed'>
              1!
            </div>
          ) : (
            <div className='key'>
              1!
            </div>
          ) }
          {keyPressed === '2' || keyPressed === '@' ? (
            <div className='key-pressed'>
              2@
            </div>
          ) : (
            <div className='key'>
              2@
            </div>
          ) }
          {keyPressed === '3' || keyPressed === '#' ? (
            <div className='key-pressed'>
              3#
            </div>
          ) : (
            <div className='key'>
              3#
            </div>
          ) }
          {keyPressed === '4' || keyPressed === '$' ? (
            <div className='key-pressed'>
              4$
            </div>
          ) : (
            <div className='key'>
              4$
            </div>
          ) }
          {keyPressed === '5' || keyPressed === '%' ? (
            <div className='key-pressed'>
              5%
            </div>
          ) : (
            <div className='key'>
              5%
            </div>
          ) }
          {keyPressed === '6' || keyPressed === '¨' ? (
            <div className='key-pressed'>
              6¨
            </div>
          ) : (
            <div className='key'>
              6¨
            </div>
          ) }
          {keyPressed === '7' || keyPressed === '&' ? (
            <div className='key-pressed'>
              7&
            </div>
          ) : (
            <div className='key'>
              7&
            </div>
          ) }
          {keyPressed === '8' || keyPressed === '*' ? (
            <div className='key-pressed'>
              8*
            </div>
          ) : (
            <div className='key'>
              8*
            </div>
          ) }
          {keyPressed === '9' || keyPressed === '(' ? (
            <div className='key-pressed'>
              9(
            </div>
          ) : (
            <div className='key'>
              9(
            </div>
          ) }
          {keyPressed === '0' || keyPressed === ')' ? (
            <div className='key-pressed'>
              0)
            </div>
          ) : (
            <div className='key'>
              0)
            </div>
          ) }
          {keyPressed === '-' || keyPressed === '_' ? (
            <div className='key-pressed'>
              -_
            </div>
          ) : (
            <div className='key'>
              -_
            </div>
          ) }
          {keyPressed === '=' || keyPressed === '+' ? (
            <div className='key-pressed'>
              =+
            </div>
          ) : (
            <div className='key'>
              =+
            </div>
          ) }
          {keyPressed === 'Backspace' ? (
            <div className='key-backspace-pressed'>
              <MdKeyboardBackspace size={30}/>
            </div>
          ) : (
            <div className='key-backspace'>
            <MdKeyboardBackspace size={30}/>
          </div>
          ) }
        </div>

        <div className='firstline'>
          <div className='key-tab'>
            Tab
          </div>
          {keyPressed === 'Q' || keyPressed === 'q' ? (
            <div className='key-pressed'>
              Q
            </div>
          ) : (
            <div className='key'>
              Q
            </div>
          ) }
          {keyPressed === 'W' || keyPressed === 'w' ? (
            <div className='key-pressed'>
              W
            </div>
          ) : (
            <div className='key'>
              W
            </div>
          ) }
          {keyPressed === 'E' || keyPressed === 'e' ? (
            <div className='key-pressed'>
              E
            </div>
          ) : (
            <div className='key'>
              E
            </div>
          ) }
          {keyPressed === 'R' || keyPressed === 'r' ? (
            <div className='key-pressed'>
              R
            </div>
          ) : (
            <div className='key'>
              R
            </div>
          ) }
          {keyPressed === 'T' || keyPressed === 't' ? (
            <div className='key-pressed'>
              T
            </div>
          ) : (
            <div className='key'>
              T
            </div>
          ) }
          {keyPressed === 'Y' || keyPressed === 'y' ? (
            <div className='key-pressed'>
              Y
            </div>
          ) : (
            <div className='key'>
              Y
            </div>
          ) }
          {keyPressed === 'U' || keyPressed === 'u' ? (
            <div className='key-pressed'>
              U
            </div>
          ) : (
            <div className='key'>
              U
            </div>
          ) }
          {keyPressed === 'I' || keyPressed === 'i' ? (
            <div className='key-pressed'>
              I
            </div>
          ) : (
            <div className='key'>
              I
            </div>
          ) }
          {keyPressed === 'O' || keyPressed === 'o' ? (
            <div className='key-pressed'>
              O
            </div>
          ) : (
            <div className='key'>
              O
            </div>
          ) }
          {keyPressed === 'P' || keyPressed === 'p' ? (
            <div className='key-pressed'>
              P
            </div>
          ) : (
            <div className='key'>
              P
            </div>
          ) }
          {keyPressed === '´' || keyPressed === '`' ? (
            <div className='key-pressed'>
              `´
            </div>
          ) : (
            <div className='key'>
              `´
            </div>
          ) }
          {keyPressed === '[' || keyPressed === '{' ? (
            <div className='key-pressed'>
              {'[{'}
            </div>
          ) : (
            <div className='key'>
              {'[{'}
            </div>
          ) }
          {keyPressed === "\\" || keyPressed === '|' ? (
            <div className='key-backlash-pressed'>
              \|
            </div>
          ) : (
            <div className='key-backlash'>
              \|
            </div>
          ) }
        </div>

        <div className='firstline'>
          <div className='key-capslock'>
            Capslock
          </div>
          {keyPressed === 'A' || keyPressed === 'a' ? (
            <div className='key-pressed'>
              A
            </div>
          ) : (
            <div className='key'>
              A
            </div>
          ) }
          {keyPressed === 'S' || keyPressed === 's' ? (
            <div className='key-pressed'>
              S
            </div>
          ) : (
            <div className='key'>
              S
            </div>
          ) }
          {keyPressed === 'D' || keyPressed === 'd' ? (
            <div className='key-pressed'>
              D
            </div>
          ) : (
            <div className='key'>
              D
            </div>
          ) }
          {keyPressed === 'F' || keyPressed === 'f' ? (
            <div className='key-pressed'>
              F
            </div>
          ) : (
            <div className='key'>
              F
            </div>
          ) }
          {keyPressed === 'G' || keyPressed === 'g' ? (
            <div className='key-pressed'>
              G
            </div>
          ) : (
            <div className='key'>
              G
            </div>
          ) }
          {keyPressed === 'H' || keyPressed === 'h' ? (
            <div className='key-pressed'>
              H
            </div>
          ) : (
            <div className='key'>
              H
            </div>
          ) }
          {keyPressed === 'J' || keyPressed === 'j' ? (
            <div className='key-pressed'>
              J
            </div>
          ) : (
            <div className='key'>
              J
            </div>
          ) }
          {keyPressed === 'K' || keyPressed === 'k' ? (
            <div className='key-pressed'>
              K
            </div>
          ) : (
            <div className='key'>
              K
            </div>
          ) }
          {keyPressed === 'L' || keyPressed === 'l' ? (
            <div className='key-pressed'>
              L
            </div>
          ) : (
            <div className='key'>
              L
            </div>
          ) }
          {keyPressed === 'Ç' || keyPressed === 'ç' ? (
            <div className='key-pressed'>
              Ç
            </div>
          ) : (
            <div className='key'>
              Ç
            </div>
          ) }
          {keyPressed === '~' || keyPressed === '^' ? (
            <div className='key-pressed'>
              ~^
            </div>
          ) : (
            <div className='key'>
              ~^
            </div>
          ) }
          {keyPressed === ']' || keyPressed === '}' ? (
            <div className='key-pressed'>
              {']}'}
            </div>
          ) : (
            <div className='key'>
              {']}'}
            </div>
          ) }
          {keyPressed === "Enter" ? (
            <div className='key-backspace-pressed'>
              <IoReturnDownBackOutline size={30}/>
            </div>
          ) : (
            <div className='key-backspace'>
              <IoReturnDownBackOutline size={30}/>
            </div>
          ) }
        </div>
        
        <div className='firstline'>
          <div className='key-shift'>
            Shift
          </div>
          {keyPressed === 'Z' || keyPressed === 'z' ? (
            <div className='key-pressed'>
              Z
            </div>
          ) : (
            <div className='key'>
              Z
            </div>
          ) }
          {keyPressed === 'X' || keyPressed === 'x' ? (
            <div className='key-pressed'>
              X
            </div>
          ) : (
            <div className='key'>
              X
            </div>
          ) }
          {keyPressed === 'C' || keyPressed === 'c' ? (
            <div className='key-pressed'>
              C
            </div>
          ) : (
            <div className='key'>
              C
            </div>
          ) }
          {keyPressed === 'V' || keyPressed === 'v' ? (
            <div className='key-pressed'>
              V
            </div>
          ) : (
            <div className='key'>
              V
            </div>
          ) }
          {keyPressed === 'B' || keyPressed === 'b' ? (
            <div className='key-pressed'>
              B
            </div>
          ) : (
            <div className='key'>
              B
            </div>
          ) }
          {keyPressed === 'N' || keyPressed === 'n' ? (
            <div className='key-pressed'>
              N
            </div>
          ) : (
            <div className='key'>
              N
            </div>
          ) }
          {keyPressed === 'M' || keyPressed === 'm' ? (
            <div className='key-pressed'>
              M
            </div>
          ) : (
            <div className='key'>
              M
            </div>
          ) }
          {keyPressed === ',' || keyPressed === '<' ? (
            <div className='key-pressed'>
              {',<'}
            </div>
          ) : (
            <div className='key'>
              {',<'}
            </div>
          ) }
          {keyPressed === '.' || keyPressed === '>' ? (
            <div className='key-pressed'>
              {'.>'}
            </div>
          ) : (
            <div className='key'>
              {'.>'}
            </div>
          ) }
          {keyPressed === ';' || keyPressed === ':' ? (
            <div className='key-pressed'>
              ;:
            </div>
          ) : (
            <div className='key'>
              ;:
            </div>
          ) }
          {keyPressed === '/' || keyPressed === '?' ? (
            <div className='key-pressed'>
              /?
            </div>
          ) : (
            <div className='key'>
              /?
            </div>
          ) }
          <div className='key-shift'>
            Shift
          </div>
        </div>

        <div className='firstline'>
          {keyPressed === 'Ctrl' ? (
            <div className='key-ctrl-pressed'>
              Ctrl
            </div>
          ) : (
            <div className='key-ctrl'>
              Ctrl
            </div>
          ) }
          <div className='key-windows'>
            <IoLogoWindows size={20} />
          </div>
          {keyPressed === 'Alt' ? (
            <div className='key-ctrl-pressed'>
              Alt
            </div>
          ) : (
            <div className='key-ctrl'>
              Alt
            </div>
          ) }
          {keyPressed === ' ' ? (
            <div className='key-space-pressed'>
              SPACE
            </div>
          ) : (
            <div className='key-space'>
              SPACE
            </div>
          ) }
          {keyPressed === 'Alt' ? (
            <div className='key-ctrl-pressed'>
              Alt
            </div>
          ) : (
            <div className='key-ctrl'>
              Alt
            </div>
          ) }
          {keyPressed === 'Ctrl' ? (
            <div className='key-ctrl-pressed'>
              Ctrl
            </div>
          ) : (
            <div className='key-ctrl'>
              Ctrl
            </div>
          ) }
        </div>
      </div>
    </div>
  )
}

export default Keyboard;
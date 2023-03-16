import React, { useState } from 'react';
import {
  AiFillUnlock,
  AiFillLock,
  AiFillCopy,
  AiOutlineCheck,
} from 'react-icons/ai';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const getRandomColor = () => {
  let randomColor = '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  return randomColor;
};

export default function ColorCard(props) {
  const [background, setBackground] = useState('#ffffff');
  const [locked, setLocked] = useState(false);
  const [copied, setCopied] = useState(false);

  const setBackgroundColor = () => {
    if (locked) {
      return;
    }
    let color = getRandomColor();
    setBackground(color);
  };

  const handleLock = () => {
    setLocked(!locked);
  };

  const handleCopy = () => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
    setCopied(true);
  };

  return (
    <div id="color-card" style={{ backgroundColor: background }}>
      <h5 id="hexcode" style={{ color: 'black' }}>
        {background ? background : '#ffffff'}
      </h5>
      <button id="bg-btn" onClick={setBackgroundColor}>
        Get New Color
      </button>
      <div>
        <button id="lock-btn" onClick={handleLock}>
          {locked === false ? <AiFillUnlock /> : <AiFillLock />}
        </button>
        <CopyToClipboard text={background}>
          <button id="copy-btn" onClick={handleCopy}>
            {<AiFillCopy />}
          </button>
        </CopyToClipboard>
      </div>
      <div id="copy-msg">
        {copied === true ? 'code copied' : null}
      </div>
    </div>
  );
}

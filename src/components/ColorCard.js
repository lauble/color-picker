import React, { useState } from 'react';
import { AiFillUnlock, AiFillLock } from 'react-icons/ai';

const getRandomColor = () => {
  let randomColor = '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  return randomColor;
};

export default function ColorCard(props) {
  const [background, setBackground] = useState('');
  const [locked, setLocked] = useState(false);

  const setBackgroundColor = () => {
    let color = getRandomColor();
    setBackground(color);
  };

  const handleLock = () => {
    setLocked(!locked);
  };

  return (
    <div id="color-card" style={{ backgroundColor: background }}>
      <h5>{background ? background : '#ffffff'}</h5>
      <button onClick={handleLock}>
        {locked === false ? <AiFillUnlock /> : <AiFillLock />}
      </button>
      <button onClick={setBackgroundColor}>Change Color</button>
    </div>
  );
}

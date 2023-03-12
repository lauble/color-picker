import React from 'react';
import { AiFillUnlock, AiFillLock } from 'react-icons/ai';

export default function ColorCard(props) {
  return (
    <div id="color-card">
      <h5>{props.hexCode}</h5>
      <button onClick={props.onClick}>
        {props.locked === false ? <AiFillUnlock /> : <AiFillLock />}
      </button>
    </div>
  );
}

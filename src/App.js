import './App.css';
import ColorCard from './components/ColorCard';
import { useState } from 'react';

const getRandomColor = () => {
  let randomColor = '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  return randomColor;
};

let hexCode1 = getRandomColor();
let hexCode2 = getRandomColor();
let hexCode3 = getRandomColor();
let hexCode4 = getRandomColor();


function App() {
  const [isLocked, setIsLocked] = useState(false)
  const handleClick = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <header>
        <h1>Color Picker</h1>
      </header>
      <h3>Choices</h3>
      <div id="card-container">
        <ColorCard value={"hex1"} locked={false} hexCode={hexCode1} onClick={handleClick}/>
        <ColorCard value={"hex2"} locked={false} hexCode={hexCode2} />
        <ColorCard value={"hex3"} locked={false} hexCode={hexCode3} />
        <ColorCard value={"hex4"} locked={false} hexCode={hexCode4} />
      </div>
      <button>Generate Colors</button>
    </div>
  );
}

export default App;

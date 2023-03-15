import './App.css';
import { useState } from 'react';
import ColorCard from './components/ColorCard';

function App() {
  const generateColors = () => {
    console.log('hello world');
  };

  const [colorCardList, setColorCardList] = useState([])

  const onAddBtnClick = () => {
    setColorCardList(colorCardList.concat(<ColorCard />))
  }

  return (
    <div className="App">
      <header>
        <h1>Color Picker</h1>
      </header>
      <button onClick={onAddBtnClick}>Add New Color Card</button>
      <h3>Choices</h3>
      <div id="card-container">
        <ColorCard />
        {colorCardList}
      </div>
      <button onClick={generateColors}>Generate Colors</button>
    </div>
  );
}

export default App;

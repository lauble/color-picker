import './App.css';
import ColorCard from './components/ColorCard';

const getRandomColor = () => {
  let randomColor = '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  return randomColor;
};

const colorCard = document.getElementById('color-card');

function App() {
  const generateColors = () => {
    if (colorCard) {
      colorCard.style.backgroundColor = getRandomColor();
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Color Picker</h1>
      </header>
      <h3>Choices</h3>
      <div id="card-container">
        <ColorCard hexCode={getRandomColor()} locked={false} />
        <ColorCard hexCode={getRandomColor()} locked={false} />
      </div>
      <button onClick={generateColors}>Generate Colors</button>
    </div>
  );
}

export default App;

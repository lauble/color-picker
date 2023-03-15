import './App.css';
import ColorCard from './components/ColorCard';

let randomColor = '';
const colorCard = document.getElementById('color-card');

const getRandomColor = () => {
  randomColor = '#000000'.replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
  });
  return randomColor;
};

function App() {
  const generateColors = () => {
    console.log(getRandomColor())
  };

  return (
    <div className="App">
      <header>
        <h1>Color Picker</h1>
      </header>
      <h3>Choices</h3>
      <div id="card-container">
        <ColorCard style={{"backgroundColor": getRandomColor()}} />
        <ColorCard style={{"backgroundColor": getRandomColor()}} />
      </div>
      <button onClick={generateColors}>Generate Colors</button>
    </div>
  );
}

export default App;

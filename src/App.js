import './App.css';
import ColorCard from './components/ColorCard';

function App() {
  const generateColors = () => {
    console.log('hello world');
  };

  return (
    <div className="App">
      <header>
        <h1>Color Picker</h1>
      </header>
      <h3>Choices</h3>
      <div id="card-container">
        <ColorCard />
        <ColorCard />
      </div>
      <button onClick={generateColors}>Generate Colors</button>
    </div>
  );
}

export default App;

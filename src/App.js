import './App.css';
import { useState } from 'react';
import ColorCard from './components/ColorCard';
import Modal from 'react-modal';

const hexcode = document.getElementById('hexcode');
console.log(hexcode);

Modal.setAppElement('#root');

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function App() {
  const generateColors = () => {
    console.log('hello world');
  };

  const [colorCardList, setColorCardList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // console.log(colorCardList[0])

  const onAddBtnClick = () => {
    setColorCardList(colorCardList.concat(<ColorCard />));
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="App">
      <div id="nav">
        <button id="instructions-btn" onClick={openModal}>
          Welcome
        </button>
        <button onClick={onAddBtnClick}>Add New Color Card</button>
        <button onClick={generateColors}>Get Random Colors</button>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Instructions"
      >
        <h3>Welcome!</h3>
        <p></p>
      </Modal>
      <header>
        <h1>Color Picker</h1>
      </header>
      <h3>Color Cards</h3>
      <div id="card-container">
        <ColorCard />
        {colorCardList}
      </div>
    </div>
  );
}

export default App;

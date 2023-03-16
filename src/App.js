import './App.css';
import { useState } from 'react';
import ColorCard from './components/ColorCard';
import Modal from 'react-modal';
import { AiFillUnlock, AiFillLock, AiFillCopy } from 'react-icons/ai';

// const hexcode = document.getElementById('hexcode');
// console.log(hexcode);

Modal.setAppElement('#root');

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px',
    backgroundColor: '#8c7851',
    color: '#eaddcf',
  },
};

function App() {
  const generateColors = () => {
    console.log('hello world');
  };

  const [colorCardList, setColorCardList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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
        <button onClick={generateColors}>Copy Collection</button>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Instructions"
      >
        <h3>Welcome!</h3>

        <ul>
          <li>
            [ Add New Color Card ] - adds a new color card to your collection
          </li>
          <li>
            [ Get Random Colors ] - gets random colors for every card on your
            screen
          </li>
          <li>
            [ Copy Collection ] - copies all hex codes from current collection
          </li>
          <li>
            [ <AiFillUnlock /> ] - toggles between locking and unlocking the
            color on the card
          </li>
          <li>
            [ <AiFillCopy /> ] - copies the hex code to your clipboard
          </li>
        </ul>
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

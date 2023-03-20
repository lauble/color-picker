import './App.css';
import { useState } from 'react';
import ColorCard from './components/ColorCard';
import Modal from 'react-modal';
import { AiFillUnlock, AiFillCopy } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

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

export const collectionData = [];

function App() {

  const [colorCardList, setColorCardList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const onAddBtnClick = () => {
    setColorCardList(colorCardList.concat(<ColorCard />));
    console.log(colorCardList)
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
        <NavLink className="nav-link" to="/" end>
          Home
        </NavLink>
        <button onClick={onAddBtnClick}>Add New Color Card</button>
        <button>Surprise Me!</button>
        <NavLink className="nav-link" to="/collection">
          My Collection
        </NavLink>
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
            [ Surprise Me! ] - gets random colors for every card on your screen
          </li>
          <li>
            [ Copy Collection ] - copies all hex codes from current collection
          </li>
          <li>[ Saved Collections ] - see all saved collections</li>
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

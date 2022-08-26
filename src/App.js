import { useState } from "react";
import {
  pig,
  cow,
  corn,
  pepper,
  sheep,
  tomato,
  tractor,
  wheat,
} from "./assets/index";
//css
import "./app.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: pig },
  { src: cow },
  { src: corn },
  { src: pepper },
  { src: sheep },
  { src: tomato },
  { src: tractor },
  { src: wheat },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="wrapper">
      <h4 className="title"> Memory game v2</h4>
      <button className="new-game-btn" onClick={shuffleCards}>
        New game
      </button>

      <div className="card-grid">
        {cards.map((card) => {
          const { id, src } = card;
          return <SingleCard key={id} imageSrc={src} />;
        })}
      </div>
    </div>
  );
};

export default App;

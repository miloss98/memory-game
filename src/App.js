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
import { cover } from "./assets/index";
//css
import "./app.css";

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
  console.log(cards[0]?.src);
  return (
    <div>
      <h4> test </h4>
      <button onClick={shuffleCards}> New game</button>

      <div className="card-grid">
        {cards.map((card) => {
          const { id, src } = card;
          return (
            <article className="card" key={id}>
              <div>
                <img className="front" src={src} alt="card-front" />
                <img className="back" src={cover} alt="card-back" />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
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
  { src: pig, matched: false },
  { src: cow, matched: false },
  { src: corn, matched: false },
  { src: pepper, matched: false },
  { src: sheep, matched: false },
  { src: tomato, matched: false },
  { src: tractor, matched: false },
  { src: wheat, matched: false },
];

const App = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true);
      if (firstChoice.src === secondChoice.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);

  console.log(cards);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="wrapper">
      <h4 className="title"> Memory game v2</h4>
      <button className="new-game-btn" onClick={shuffleCards}>
        New game
      </button>

      <div className="card-grid">
        {cards.map((card) => {
          const { id } = card;
          return (
            <SingleCard
              key={id}
              card={card}
              handleChoice={handleChoice}
              flipped={
                card === firstChoice || card === secondChoice || card.matched
              }
              disabled={disabled}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;

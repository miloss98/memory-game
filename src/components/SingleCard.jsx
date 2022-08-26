import { cover } from "../assets/index";
import "./singlecard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <article className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          onClick={handleClick}
          className="back"
          src={cover}
          alt="card-back"
        />
      </div>
    </article>
  );
};

export default SingleCard;

import { cover } from "../assets/index";
import "./singlecard.css";

const SingleCard = ({ imageSrc }) => {
  return (
    <article className="card">
      <div>
        <img className="front" src={imageSrc} alt="card-front" />
        <img className="back" src={cover} alt="card-back" />
      </div>
    </article>
  );
};

export default SingleCard;

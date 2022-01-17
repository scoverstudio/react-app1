import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleFavorite, removeCard } from "../../redux/cardsReducer";
import styles from "./Card.module.scss";

const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();

  const favoriteHandler = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  const removeHandler = (e) => {
    e.preventDefault()
    dispatch(removeCard(id))
  }

  return (
    <li className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.buttons}>
        <button
          className={clsx(styles.base, isFavorite && styles.favorite)}
          onClick={favoriteHandler}>
          <span className="fa fa-star-o"></span>
        </button>
        <button
        onClick={removeHandler}>
          <span className="fa fa-trash"></span>
        </button>
      </div>
    </li>
  );
};

export default Card;

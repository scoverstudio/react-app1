import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/store";
import styles from "./Card.module.scss";

const Card = ({ title, isFavorite, id }) => {
  const dispatch = useDispatch();

  const favoriteHandler = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  return (
    <li className={styles.card}>
      <h3>{title}</h3>
      <button
        className={clsx(styles.base, isFavorite && styles.favorite)}
        onClick={(e) => favoriteHandler(e)}>
        <span className={"fa fa-star-o"}></span>
      </button>
    </li>
  );
};

export default Card;

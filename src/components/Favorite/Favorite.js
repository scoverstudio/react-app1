import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";
import Card from "../Card/Card";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss";

const Favorite = () => {
  const cards = useSelector((state) => getFavoriteCards(state));

  return (
    <section>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {cards.length === 0 ? (
          <p>No favorite cards!</p>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              isFavorite={card.isFavorite}
              id={card.id}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export default Favorite;

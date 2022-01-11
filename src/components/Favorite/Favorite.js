import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store";
import Card from "../Card/Card";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Favorite.module.scss";

const Favorite = () => {

  const cards = useSelector(state => getFavoriteCards(state))
  console.log(cards)
  return (
    <section>
      <PageTitle>Favorite</PageTitle>
      <h2 className={styles.title}>
      </h2>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} isFavorite={card.isFavorite} id={card.id} />
        ))}
      </ul>
    </section>
  );
};

export default Favorite;

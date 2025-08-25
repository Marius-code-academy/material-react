import defaultCharacter from "../../assets/defaultCharacter.jpg";
import styles from "./Card.module.css";

function Card({ name, yearOfBirth, image }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} width={150} src={image ? image : defaultCharacter} alt={`image of ${name}`} />
      <h3>{name}</h3>
      <p>{yearOfBirth}</p>
    </div>
  );
}

export default Card;

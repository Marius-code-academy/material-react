import Card from "../Card/Card";
import styles from "./Wrapper.module.css";

function Wrapper({ characters }) {
  return (
    <div className={styles.wrapper}>
      {characters.map((character) => (
        <Card key={character.id} image={character.image} name={character.name} yearOfBirth={character.yearOfBirth} />
      ))}
    </div>
  );
}

export default Wrapper;

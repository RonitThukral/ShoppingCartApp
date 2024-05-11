import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";
import data from "../data/itemData";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((item) => {
        return(
          <ItemCard name={item.name} price={item.price} key={item.id} id= {item.id} />
        )
      })}
    </div>
  );
}

export default Items;

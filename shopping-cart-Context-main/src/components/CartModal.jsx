import React from "react";
import { useValue } from "../context";
import styles from "../styles/CartModal.module.css";

function CartModal() {
    const {cart, handleClear, handleToggle, total} = useValue()
  return (
    <div className={styles.cartModal}>
      <div className={styles.closeButton} onClick={handleToggle}>
        Close
      </div>
      <div className={styles.clearButton} onClick={handleClear}>Clear</div>
      <div className={styles.itemContainer}>
        {cart.map((item) => {
            return (
            <div className={styles.cartCard} key={item.id}>
           <h1>{item.name}</h1> 
            <h1>x{item.qty}</h1>
            <h1>x{item.price * item.qty}</h1>
            </div>
            )
        })}
      </div>
      <div className={styles.total}>
        <div className={styles.totalText}>Total</div>
        <div className={styles.totalPrice}>$Price {total}</div>
      </div>
    </div>
  );
}

export default CartModal;

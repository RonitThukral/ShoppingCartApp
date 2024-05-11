import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../context";

function Navbar() {
  const {item, total, handleClear, handleToggle} = useValue()
  
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div>
        <button onClick={handleClear}>reset</button>
        <button onClick={handleToggle}>Cart</button>
      </div>
    </div>
  );
}

export default Navbar;

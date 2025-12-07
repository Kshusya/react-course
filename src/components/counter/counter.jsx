import styles from "./counter.module.css";

export const Counter = ({ count, increment, decrement }) => {
  return (
    <div className={styles.counter}>
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

export const Counter = ({ count, increment, decrement }) => {
  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <div>{count}</div>
      <button onClick={increment}>+</button>
    </div>
  );
};

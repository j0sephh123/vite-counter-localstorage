import { Props } from "./types";
import useCounter from "./useCounter";

export default function Counter(props: Props) {
  const { count, handleAdd, handleSubtract, reset } = useCounter(props);

  return (
    <div>
      <p>{props.label}</p>
      <button onClick={handleSubtract}>Subtract</button>
      {count}
      <button onClick={handleAdd}>Add</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

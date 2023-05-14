import { Props } from "./types";
import useLocalStorage from "./useLocalStorage";

export default function useCounter({
  label,
  limit,
  isOnlyPositive = true,
}: Props) {
  const [count, setCount] = useLocalStorage(label, 0);

  const reset = () => setCount(0);

  const handleAdd = () => {
    setCount((count: number) => {
      if (limit && count === limit) {
        return count;
      }
      return count + 1;
    });
  };

  const handleSubtract = () => {
    setCount((count: number) => {
      if (isOnlyPositive && count === 0) {
        return count;
      }
      return count - 1;
    });
  };

  return { count, handleAdd, handleSubtract, reset };
}

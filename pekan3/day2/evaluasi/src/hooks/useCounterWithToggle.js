import { useCounter } from "./useCounter";
import { useToggle } from "./useToggle";

export function useCounterWithToggle(initialCount = 0) {
  const { count, increment, decrement, reset } = useCounter(initialCount);
  const [isVisible, toggleVisible] = useToggle(true);

  return { count, increment, decrement, reset, isVisible, toggleVisible };
}

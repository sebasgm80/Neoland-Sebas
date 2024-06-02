import { useCallback, useState } from "react";

export const useToggle = () => {
  const [state, setState] = useState(false);

  const handler = useCallback(() => {
    setState((preValue) => !preValue);
  }, []);

  return [state, handler];
};

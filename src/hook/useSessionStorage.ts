import { useState, useEffect } from "react";

const useSessionStorage = (key: string): string | null => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    const storedValue = sessionStorage.getItem(key);
    setValue(storedValue);
  }, [key]);

  return value;
};

export default useSessionStorage;

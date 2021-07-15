/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export const useStopwatch = (callback: () => void, duration: number) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, duration);
    return () => clearTimeout(timer);
  }, []);
};

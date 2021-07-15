/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

// TODO: Created to simulated a backend response, delete when backend API calls pass
export const useStopwatch = (callback: () => void, duration: number) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, duration);
    return () => clearTimeout(timer);
  }, []);
};

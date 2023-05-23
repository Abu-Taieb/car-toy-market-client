import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Car Toy Market`;
  }, [title]);
};
export default useTitle
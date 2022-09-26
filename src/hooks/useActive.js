import { useState } from "react";
const useActive = (initialId) => {
  const [activeCard, setActiveCard] = useState(initialId);

  const handleClick = (id) => {
    setActiveCard(id);
  };
  return { activeCard, handleClick };
};

export default useActive;

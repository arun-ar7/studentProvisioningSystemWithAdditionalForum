import React, { useState } from "react";
// import './AddButton.css';

export default function AddButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return <>Add</>;
}

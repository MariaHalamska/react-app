import React, { useState, useEffect } from "react";
function MyComponent() {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const updateName = () => {
    setName("Ja");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set age</button>
      <p>Dark mode: {isDarkMode ? "On" : "Off"}</p>
      <button onClick={toggleDarkMode}>Toggle dark mode</button>
    </div>
  );
}
export default MyComponent;

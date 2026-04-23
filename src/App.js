import "./App.css";
import Lottie from "lottie-react";
import animationData1 from "./Lilia_Light.json";
import animationData2 from "./DarkLight.json";
import Card from "./card.js";
import Button from "./Button.js";
import Greeting from "./greeting.js";
import animationData3 from "./Rybka_Light.json";
import MyComponent from "./MyComponent.js";
import Weather from "./Weather.js";
function App() {
  return (
    <body>
      <Lottie className="lottie" animationData={animationData1} />
      <p>here's current year! {new Date().getFullYear()}</p>
      <Greeting name="User" isLoggedIn={true}></Greeting>
      <Lottie className="lottie" animationData={animationData2} />
      <Weather></Weather>
      {/* <Card></Card> */}
      <Lottie className="lottie" animationData={animationData3} />
      <Button></Button>
      <MyComponent> </MyComponent>
    </body>
  );
}
console.log("test");
export default App;

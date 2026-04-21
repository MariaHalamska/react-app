import "./App.css";
import Lottie from "lottie-react";
import animationData1 from "./Lilia_Light.json";
import animationData2 from "./DarkLight.json";
import Card from "./card.js";
import Button from "./Button.js";

function App() {
  return (
    <>
      <body>
        <Lottie className="lottie" animationData={animationData1} />
        <p>here's current year! {new Date().getFullYear()}</p>
        <Lottie className="lottie" animationData={animationData2} />
        <Card></Card>
        <Button></Button>
      </body>
    </>
  );
}
console.log("test");
export default App;

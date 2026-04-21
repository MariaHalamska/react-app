import "./App.css";
import Lottie from "lottie-react";
import animationData1 from "./Lilia_Light.json";
import animationData2 from "./DarkLight.json";

function App() {
  return (
    <body>
      <Lottie className="lottie" animationData={animationData1} />
      <p>wawaw</p>
      <Lottie className="lottie" animationData={animationData2} />
    </body>
  );
}
console.log("test");
export default App;

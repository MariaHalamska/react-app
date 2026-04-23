import { useState, useEffect } from "react";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Poznan&units=metric&appid=94ae45dee0fd93811f78f86c031db921";
function Weather() {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setTemp(json.main.temp);
      });
    };
    fetchData();
  }, []);
  return <p className="weather">Temperature in Poznan: {temp}°C</p>;
}
export default Weather;

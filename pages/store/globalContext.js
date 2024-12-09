import { createContext, useEffect, useState } from "react"

const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  const [globals, setGlobals] = useState();

  useEffect(() => {
    getWeatherData();
  }, []);

  async function getWeatherData() {
    const response = await fetch('/api/getWeather', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    let data = await response.json();
    setGlobals(data);
  }

  return <GlobalContext.Provider value={globals}>
    {props.children}
  </GlobalContext.Provider>
}

export default GlobalContext
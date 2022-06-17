//импортируем стили
import "./App.css";
import { useState } from "react";
import { DefaultContext } from "./Context";
import { createContext } from "react";
//импортируем .svg картинки как компоненты Реакт

import { Content } from "./components/content";
// import swPlanets from "./data/planets.json";
// import swStarships from "./data/starships.json";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
//массив данных ссылок
//{} if return () сам ретурнит

export const ThemeContext = createContext({});
export default function App() {
  const [fan, setFan] = useState("");
  const [theme, setTheme] = useState("dark");
  const handleCreateFan = ({ name }) => {
    setFan(name);
  };

  

  return (    
    <DefaultContext.Provider value={{ handleCreateFan }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header fan={fan} />
      
      <hr />
      {/* <ThemeProvider theme={theme}>
      <MyApp />
    </ThemeProvider> */}
      <Content/>
      <hr />
      <Footer />
      </ThemeContext.Provider>
    </DefaultContext.Provider>
    
  );
}

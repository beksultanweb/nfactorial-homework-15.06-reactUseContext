import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import swStarships from "../../data/starships.json";
import { useState, useContext } from "react";
import { ItemSpisok } from "../sw-item-spisok";
import { ItemLists } from "../sw-item-lists";

//ThemeMode
import {ThemeContext} from "../../App";

export const Content = ({ handleCreateFan }) => {
    const [selector, setSelector] = useState("Characters");
    const handleSelectorChange = (event) =>{
        setSelector(event.target.value);
    }
    const { theme } = useContext(ThemeContext);
    const heroStyle = {
        dark: {
            backgroundColor: "#333",
            color: "white",
            select : {
                padding: "1rem",
                backgroundColor: "#333",
                color: "white",
                cursor: "pointer"
            }
        },
        light: {
            backgroundColor: "#eee",
            color: "black",
            select : {
                padding: "1rem",
                backgroundColor: "#eee",
                color: "black",
                cursor: "pointer"
            }
        },
        common: {
            transition: "all 1s ease",
            height: "1400px",
        },
    };

    const themeStyle = {
        ...(theme === "light" ? heroStyle.light : heroStyle.dark),
        ...heroStyle.common,
    };
    return (
      <div className="content-layout" style={themeStyle}>
        <select value={selector} placeholder="Choose your path" className="select-item" onChange={handleSelectorChange} style={
            theme === "dark"
                ? {
                    color: "white",
                    backgroundColor: "#333",
                }: {
                    color: "black",
                    backgroundColor: "#eee",
                }
      }>
          <option>Characters</option>
          <option>Planets</option>
          <option>Starships</option>
        </select>
            {selector==="Characters"&&swCharacters.map((character) =>(
                <ItemLists key={character.name} item={character} type="chars">
                    <ItemSpisok>gender: {character.gender}</ItemSpisok>
                    <ItemSpisok>birthday: {character.birth_year}</ItemSpisok>
                </ItemLists>
            ))}
            {selector==="Planets"&&swPlanets.map((planet) =>(
                <ItemLists key={planet.name} item={planet} type="planets">
                    <ItemSpisok>Rotation period: {planet.rotation_period}</ItemSpisok>
                    <ItemSpisok>Orbital period: {planet.orbital_period}</ItemSpisok>
                </ItemLists>
            ))}
            {selector==="Starships"&&swStarships.map((ship) =>(
                <ItemLists key={ship.name} item={ship} type="ships">
                    <ItemSpisok>Model: {ship.model}</ItemSpisok>
                    <ItemSpisok>manufacturer: {ship.manufacturer}</ItemSpisok>
                </ItemLists>
            ))}
      </div>
    );
}
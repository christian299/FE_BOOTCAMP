import React from "react";
import { Pokemon } from "../types";

export const Card: React.FC<Pokemon> = ({name, hp, mana, skills, description}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{hp} - {mana}</p>
            <p>{description}</p>
            <ul>
                {skills.map(skill => {
                    return(
                        <li>{skill.name} - {skill.damage}</li>
                    )
                })}
            </ul>
        </div>
    )
}
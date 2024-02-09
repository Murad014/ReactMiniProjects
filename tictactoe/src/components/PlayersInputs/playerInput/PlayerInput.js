import "./PlayerInput.css";
import {useState} from "react";

export default function PlayerInput({type, isEdit, defaultValue, ...props}) {
    let [playerName, setPlayerOneName] = useState(defaultValue);

    function handleChange(event) {
        setPlayerOneName(event.target.value);
    }

    return isEdit ?
        <input type="text" {...props}
               onChange={handleChange}
               value={playerName}
               disabled
        /> :
        <input type="text" {...props}
               onChange={handleChange}
               value={playerName}
        />;
}
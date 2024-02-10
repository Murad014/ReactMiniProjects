import "./PlayerInput.css";
import {useState} from "react";

export default function PlayerInput({type, isEdit, symbol,
                                        setPlayerName, defaultValue, ...props}) {
    let [playerName, setPlayerOneName] = useState(defaultValue);

    function handleChange(event) {
        const playerName = event.target.value;
        setPlayerOneName(playerName);

        setPlayerName(symbol, playerName);
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
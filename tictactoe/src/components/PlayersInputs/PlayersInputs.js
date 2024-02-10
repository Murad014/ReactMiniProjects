import PlayerInput from "./playerInput/PlayerInput";
import { useState } from "react";

import "./PlayersInputs.css";


export default function PlayersInputs({currentSymbol, handePlayerNamesChanges,  ...props}){
    const [isEdit, isEditChange] = useState(false);
    const [playerNames, setPlayerNames] = useState({
        "X": "Player 1",
        "O": "Player 2",
    });

    function handleChange(){
        isEditChange((oldEdit) => !oldEdit);
        handePlayerNamesChanges(playerNames);
    }

    function handePlayerNamesChange(symbol, playerName){
        setPlayerNames(prev => {
            prev[symbol] = playerName;
            return prev;
        });

    }

    return (
        <div {...props}>
            <PlayerInput symbol="X" defaultValue="Player 1 - X" isEdit={isEdit}
                         setPlayerName={handePlayerNamesChange}
                         className={currentSymbol === "X" ? "active" : null} />

            <PlayerInput symbol="O" defaultValue="Player 2 - O" isEdit={isEdit}
                         setPlayerName={handePlayerNamesChange}
                         className={currentSymbol === "O" ? "active" : null}
            />

            <span className="editAndSave"
                  onClick={handleChange}
            >
                {isEdit ? "Edit" : "Save"}
            </span>
        </div>
    );
}
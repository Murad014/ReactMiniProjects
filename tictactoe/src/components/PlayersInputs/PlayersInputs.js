import PlayerInput from "./playerInput/PlayerInput";
import { useState } from "react";

import "./PlayersInputs.css";


export default function PlayersInputs({currentSymbol, ...props}){
    const [isEdit, isEditChange] = useState(false);


    function handleChange(){
        isEditChange((oldEdit) => !oldEdit);
    }

    return (
        <div {...props}>
            <PlayerInput placeholder="Player 1 - X" isEdit={isEdit}
                         className={currentSymbol === "X" ? "active" : null} />

            <PlayerInput placeholder="Player 2 - O" isEdit={isEdit}
                         className={currentSymbol === "O" ? "active" : null}
            />

            <span className="editAndSave" onClick={handleChange}>
                {isEdit ? "Edit" : "Save"}
            </span>
        </div>
    );
}
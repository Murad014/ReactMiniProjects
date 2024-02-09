import "./MoveContent.css";
import Button from "../buttons/button/Button";

export default function MoveContent({moves, active, closeClick}){

    return (

       active && <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="move-content">
                    <ol className="move-list">

                        {moves.map(move =>
                            <li key={`${move.row}${move.col}`}>
                                Player: {move.player},
                                Row: {move.row},
                                Col: {move.col}
                            </li>

                        )}

                    </ol>
                    <Button className="close" onClick={closeClick}>Close</Button>
                </div>
            </div>
        </div>

    );

}
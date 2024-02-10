import "./MoveContent.css";
import Button from "../buttons/button/Button";
import ModalBox from "../modalBox/ModalBox";

export default function MoveContent({moves, active, closeClick}){
    const moveContent = (
        <div className="move-content">
            <ol className="move-list">
                {
                    moves.length === 0 ?

                        <span>No moves yet.</span> :

                        moves.map(move =>
                            <li key={`${move.row}${move.col}`}>
                                Player: {move.player},
                                Row: {move.row},
                                Col: {move.col}
                            </li>
                        )
                }

            </ol>
            <Button className="close" onClick={closeClick}>Close</Button>
        </div>
    );

    return (

        active && <ModalBox active={active}> {moveContent} </ModalBox>

    );

}
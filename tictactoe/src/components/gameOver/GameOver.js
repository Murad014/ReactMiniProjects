import "./GameOver.css";
import Button from "../buttons/button/Button";
import ModalBox from "../modalBox/ModalBox";

export default function GameOver({moves, active, resetClick, message}){
    const moveContent = (
        <div className="move-content">
            <div className="">
                <h2>Game Over!</h2>
                <p >{message}</p>
            </div>

            <Button className="close" onClick={resetClick}>Reset</Button>
        </div>
    );

    return (

        active && <ModalBox active={active}> {moveContent} </ModalBox>

    );
}
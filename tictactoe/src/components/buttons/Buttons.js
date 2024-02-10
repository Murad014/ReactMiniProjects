import "./Buttons.css"
import Button from "./button/Button";

export default function Buttons({onModalClick, handleReset}){
    return (
        <div className="button-content">
            <Button onClick={handleReset}>Reset</Button>
            <Button onClick={onModalClick}>Moves</Button>
        </div>
    );
}
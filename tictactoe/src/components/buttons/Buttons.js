import "./Buttons.css"
import Button from "./button/Button";

export default function Buttons({onModalClick}){
    return (
        <div className="button-content">
            <Button>Reset</Button>
            <Button onClick={onModalClick}>Moves</Button>
        </div>
    );
}
import './App.css';
import HeadParagraph from "./components/headParagraph/HeadParagraph";
import PlayersInputs from "./components/PlayersInputs/PlayersInputs";
import GameBoard from "./components/gameBoard/GameBoard";
import GameContent from "./components/gameContent/GameContent";
import Buttons from "./components/buttons/Buttons";
import {useState} from "react";
import MoveContent from "./components/moveContent/MoveContent";


function getActivePlayer(moves){
    let currentPlayer = "X";
    if(moves.length > 0 && moves[0].player === "X")
        currentPlayer = "O";

    return currentPlayer;
}
function App() {

    const [movesModal, changeModal] = useState(false);
    const [moves, changeMoves] = useState([]);

    const activePlayer = getActivePlayer(moves);

    function handleCurrentSymbol(rowIndex, colIndex){
        changeMoves((prevMoves) => {
            const currentPlayer = getActivePlayer(prevMoves);

            return [
                {
                    row: rowIndex, col: colIndex,
                    player: currentPlayer
                }
                , ...prevMoves];

        });
    }

    function setModalOpen (){
        changeModal(true);
    }

    function setModelClose(){
        changeModal(false);
    }


    return (
        <GameContent>

            <HeadParagraph className="headParagraph" />
            <PlayersInputs id="playerInputs" className="player-inputs"  currentSymbol={activePlayer}/>
            <GameBoard moves={moves} handleSymbolChange={handleCurrentSymbol}/>
            <Buttons onModalClick={setModalOpen}/>
            <MoveContent moves={moves} active={movesModal} closeClick={setModelClose} />

        </GameContent>
    );
}

export default App;

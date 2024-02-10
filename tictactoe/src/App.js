import './App.css';
import HeadParagraph from "./components/headParagraph/HeadParagraph";
import PlayersInputs from "./components/PlayersInputs/PlayersInputs";
import GameBoard from "./components/gameBoard/GameBoard";
import GameContent from "./components/gameContent/GameContent";
import Buttons from "./components/buttons/Buttons";
import {useState} from "react";
import MoveContent from "./components/moveContent/MoveContent";
import GameOver from "./components/gameOver/GameOver";

const cellAddresses = {
    0: {row: 0, col: 0},
    1: {row: 0, col: 1},
    2: {row: 0, col: 2},
    3: {row: 1, col: 0},
    4: {row: 1, col: 1},
    5: {row: 1, col: 2},
    6: {row: 2, col: 0},
    7: {row: 2, col: 1},
    8: {row: 2, col: 2},
};

const winnerAddresses =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


const initialBoard = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
];


function checkWinner(){
    for(const winnerAddress of winnerAddresses){
        const cellA = cellAddresses[winnerAddress[0]];
        const cellB = cellAddresses[winnerAddress[1]];
        const cellC = cellAddresses[winnerAddress[2]];

        if(initialBoard[cellA.row][cellA.col] !== "_" &&
            initialBoard[cellA.row][cellA.col] === initialBoard[cellB.row][cellB.col] &&
            initialBoard[cellB.row][cellB.col] === initialBoard[cellC.row][cellC.col]) {

            return initialBoard[cellB.row][cellB.col];
        }

    }
    return "_";
}


function getActivePlayer(moves){
    let currentPlayer = "X";
    if(moves.length > 0 && moves[0].player === "X")
        currentPlayer = "O";

    return currentPlayer;
}

function App() {
    const [moves, changeMoves] = useState([]);
    const [movesModal, changeModal] = useState(false);
    const [playerNames, setPlayerNames] = useState({
        "X": "Player 1",
        "O": "Player 2",
    });

    const activePlayer = getActivePlayer(moves);
    const winner = checkWinner();

    for(const move of moves){
        const {row, col, player} = move;
        initialBoard[row][col] = player;
    }


    function handleCurrentSymbol(rowIndex, colIndex){
        if(initialBoard[rowIndex][colIndex] !== "_")
            return;

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

    function handePlayerNamesChange(newPlayerNames){
        setPlayerNames(prev => {
            prev["X"] = newPlayerNames["X"];
            prev["O"] = newPlayerNames["O"];
            return prev;
        });

    }

    function handleReset(){
        changeMoves([]);

        console.log(moves);
    }



    return (
        <GameContent>
            <HeadParagraph className="headParagraph" />
            <PlayersInputs id="playerInputs" className="player-inputs"  currentSymbol={activePlayer}
            handePlayerNamesChanges={handePlayerNamesChange}/>
            <GameBoard moves={moves} handleSymbolChange={handleCurrentSymbol} board={initialBoard}/>
            <Buttons onModalClick={setModalOpen} handleReset={handleReset}/>
            <MoveContent moves={moves} active={movesModal} closeClick={setModelClose} />
            {winner !== "_" ? <GameOver active={true} message={playerNames[winner] + " is winner!"}/> : null}
            {moves.length === 9 ? <GameOver active={true} message="DRAW!"/> : null}
        </GameContent>
    );
}

export default App;

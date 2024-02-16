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


const INITIAL_BOARD = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
];


function checkWinner(){
    for(const winnerAddress of winnerAddresses){
        const cellA = cellAddresses[winnerAddress[0]];
        const cellB = cellAddresses[winnerAddress[1]];
        const cellC = cellAddresses[winnerAddress[2]];

        if(INITIAL_BOARD[cellA.row][cellA.col] !== "_" &&
            INITIAL_BOARD[cellA.row][cellA.col] === INITIAL_BOARD[cellB.row][cellB.col] &&
            INITIAL_BOARD[cellB.row][cellB.col] === INITIAL_BOARD[cellC.row][cellC.col]) {

            return INITIAL_BOARD[cellB.row][cellB.col];
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

function setCellClick(moves){
    for(const move of moves){
        const {row, col, player} = move;
        INITIAL_BOARD[row][col] = player;
    }

}

function App() {
    const [moves, changeMoves] = useState([]);
    const [movesModal, changeModal] = useState(false);
    const [playerNames, setPlayerNames] = useState({
        X: "Player 1",
        O: "Player 2",
    });

    setCellClick(moves);
    const activePlayer = getActivePlayer(moves);
    const winner = checkWinner();

    function handleCurrentSymbol(rowIndex, colIndex){
        if(INITIAL_BOARD[rowIndex][colIndex] !== "_")
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

        // Reset initial board
        for(let row = 0; row < 3; row++)
            for(let col = 0; col < 3; col++)
                INITIAL_BOARD[row][col] = "_";
        setModelClose();

    }



    return (
        <GameContent>
            <HeadParagraph className="headParagraph" />
            <PlayersInputs id="playerInputs" className="player-inputs"  currentSymbol={activePlayer}
            handePlayerNamesChanges={handePlayerNamesChange}/>
            <GameBoard moves={moves} handleSymbolChange={handleCurrentSymbol} board={INITIAL_BOARD}/>
            <Buttons onModalClick={setModalOpen} handleReset={handleReset}/>
            <MoveContent moves={moves} active={movesModal} closeClick={setModelClose} />
            {winner !== "_" ? <GameOver handleReset={handleReset} active={true} message={playerNames[winner] + " is winner!"}/> : null}
            {moves.length === 9 ? <GameOver handleReset={handleReset} active={true} message="DRAW!"/> : null}
        </GameContent>
    );
}

export default App;

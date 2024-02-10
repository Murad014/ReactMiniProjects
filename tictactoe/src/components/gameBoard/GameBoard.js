import "./GameBoard.css";
import Cell from "./cell/Cell";


export default function GameBoard({moves, handleSymbolChange, board}){

    return (
        <div className="game-board">
            {board.map(
                (row, rowIndex) =>
                    row.map((col, colIndex) =>

                        <Cell
                            key={`${rowIndex}+${colIndex}`}
                            func={() => handleSymbolChange(rowIndex, colIndex)}
                        >
                            {col}

                        </Cell>)
            )}
        </div>
    );
}
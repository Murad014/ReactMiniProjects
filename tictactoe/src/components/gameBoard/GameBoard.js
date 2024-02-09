import "./GameBoard.css";
import Cell from "./cell/Cell";
import {useState} from "react";


const initialBoard = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
];

export default function GameBoard({moves, handleSymbolChange}){
    const currentBoard = initialBoard;
    for(const move of moves){
        const {row, col, player} = move;
        currentBoard[row][col] = player;

    }


    return (
        <div className="game-board">
            {currentBoard.map(
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
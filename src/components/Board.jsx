import {useState} from 'react'

import Cell from './Cell'

import './Board.css'

const Board = ({selectCell}) => {

    const createBoard = () => {
        const board = []

        for(let x = 0; x < 3; x++)
            for(let y = 0; y < 3; y++)
                board.push(
                    <Cell key={(x*100)+(y*10)+1}
                        selectCell={selectCell}
                        xPos={x} 
                        yPos={y}
                    />)

        return board
    }

    return (
        <div id="board">
            {createBoard()}
        </div>
    )
}

export default Board

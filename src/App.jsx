import {useState, useEffect} from 'react'

import Board from "./components/Board"

const App = () => {
  // characters used for players
  const characters = ['X', 'O']
  const [currentPlayer, setCurrent] = useState(0) // player 1 is first
  // positional array for players
  const [player1Pos, setPlayer1Pos] = useState([])
  const [player2Pos, setPlayer2Pos] = useState([])

  // return character to place inside of the cell
  const selectCell = (x, y) => {
    if(player1Pos.some(pastPos => { return (pastPos.x === x && pastPos.y === y) }) ||
    player2Pos.some(pastPos => { return (pastPos.x === x && pastPos.y === y)})){
      alert('Nope')
      return
    }

    const selectedCharacter = characters[currentPlayer]
    
    currentPlayer === 0 ?
      setPlayer1Pos(old=>[...old, {x,y}]) :
      setPlayer2Pos(old=>[...old, {x,y}])
    
    setCurrent(old=>old === 1 ? 0 : 1)
    return selectedCharacter
  }

  // Check to see if the player meets the win conditions
  const checkPlayer = (positions) => {
    if(positions.length <= 0) return false

    // sort positions by X so the array is easier to compare
    positions.sort((a, b) => a.x < b.x)
    
    // grab X and Y positions
    let posX = positions.map(elem => elem.x)
    let posY = positions.map(elem => elem.y)

    // check for horizontal/vertical win conditions (3 in a row)
    for(let i = 0; i < 3; i++){
      if(posX.filter(elem => elem === i).length >= 3) return true
      if(posY.filter(elem => elem === i).length >= 3) return true
    }
    
    // compare positions to see if the position array contains these values
    // (0,0), (1,1), (2,2)
    // (0,2), (1,1), (2,0)
    for(let i = 0; i < posX.length; i++){
      if(posX[i] === 0 && (posY[i] === 0 || posY[i]===2))
        if(posX[i+1]=== 1 && posY[i+1]=== 1)
          if(posX[i+2]=== 2 && (posY[i+2]===2 || posY[i+2]===0))
            return true
    }

    return false
  }

  // check the win conditions everytime the position is updated
  useEffect(() => {
    if(checkPlayer(player1Pos)) alert('Player1 won')
    if(checkPlayer(player2Pos)) alert('Player2 won')
  }, [player1Pos, player2Pos])

  // load names for players
  useEffect(() =>{
    // console.log(prompt('Test'))
  }, [])

  return (
    <>
      <Board selectCell={selectCell}/>
    </>
  );
}

export default App;

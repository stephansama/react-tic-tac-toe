import {useState} from 'react'

import './Cell.css'

const Cell = ({xPos, yPos, selectCell}) => {

    const [content, setContent] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        const content = selectCell(xPos, yPos)
        if(content) setContent(content)
    }

    const removeBorders = () => {
        return {
            borderTopStyle: xPos === 0 && 'none',
            borderLeftStyle: yPos === 0 && 'none',
            borderRightStyle: yPos === 2 && 'none',
            borderBottomStyle: xPos === 2 && 'none',
        }
    }

    return (
        <div style={removeBorders()} id="cell" onClick={handleClick}>
            {content}
        </div>
    )
}

export default Cell

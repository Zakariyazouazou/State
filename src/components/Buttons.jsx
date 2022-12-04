import React from 'react'
import {useStateContext} from '../contexts/ContextProvider'
const Buttons = ({bgColor   , icon, color, bgHoverColor, size, text, borderRadius, width}) => {
  const { setisClick, initialisation } = useStateContext();
  return (
    <button
    type='button'
    onClick={() => setisClick(initialisation)}
    style={{backgroundColor:bgColor , color : color , borderRadius:borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
       {icon} {text}
    </button>
  )
}

export default Buttons

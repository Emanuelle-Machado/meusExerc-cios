import React from 'react'

const BotaoEstilizado = () => {

    //class -> className
    // for -> htmlFor

    const estiloDoBotao = {
        // background-color -> backgroundColor
        backgroundColor: "#333",
        color: '#fff',
        padding: '15px 32px',
        cursor: 'pointer',
    };

  return (
    <button style={estiloDoBotao} >Clique em mim!</button>
  )
}

export default BotaoEstilizado
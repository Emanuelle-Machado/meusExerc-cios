import React from 'react'
import { useState } from 'react'

const Counter2 = () => {
  const [count, setCount] = useState(0);

    return (
        <div>
    <button onClick={() => setCount(count + 1)}>Adicione</button>
    <button onClick={() => setCount(count - 1)}>Diminua</button>
    <p>Você clicou {count} vezes no botão</p>
    </div>
  )
}

export default Counter2
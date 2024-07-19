

const Button = () => {

    const handleClick = () => {
        console.log('clicou');
    }

  return (
    <button onClick={handleClick}>clique em mim</button>
  )
}

export default Button
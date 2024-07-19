import FilhoFuncao from "./FilhoFuncao";

const PaiFunction = () => {

    const handleChildClick = () => {
        console.log('clicou no botão do elemento filho!')
    };

  return (
    <div> <FilhoFuncao onChildClick={handleChildClick} /> </div>
  );
}

export default PaiFunction
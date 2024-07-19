import { useReducer } from 'react'

//definição de estado inicial
const estadoInicial = { contador: 0 };

//função reducer que define como as ações atualizam o estado
function reducer(estado, acao) {
    switch (acao.tipo) {
        case "incrementar":
            return { contador: estado.contador + 1 };
        case "incrementar_dobrado":
            return { contador: estado.contador + 2 };
        case "decrementar":
            return { contador: estado.contador - 1 };
        case "resetar":
            return { contador: 0 };
        default:
            throw new Error("Ação não suportada");
    }
}
const Contador = () => {

    //inicializar o useReducer com estado inicial e função modificadora
    const [estado, dispatch] = useReducer(reducer, estadoInicial);
    return (
        <div>
            <p>contagem: {estado.contador} </p>
            <button onClick={() => dispatch({ tipo: "incrementar" })}>incrementar</button>
            <button onClick={() => dispatch({ tipo: "incrementar_dobrado" })}>incrementar dobrado</button>
            <button onClick={() => dispatch({ tipo: "decrementar" })}>decrementar</button>
            <button onClick={() => dispatch({ tipo: "resetar" })}>resetar</button>

        </div>
    )
}

export default Contador
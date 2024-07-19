import { useState, useMemo } from 'react'

const CalculoPesado = ({ numero }) => {

    const resultadoCalculoPesado = useMemo(() => {
        return operacaoPesada(numero);
    }, [numero]);

    return (
        <div>
            resultado: {resultadoCalculoPesado}
        </div>
    )
}

const operacaoPesada = (num) => {
    console.log('Realizando operacao pesada')
    return num * 1000;
};

export default CalculoPesado
import { useState, useMemo } from 'react'

const Exercicio2 = ({ num }) => {

    const resultadoFibonacci = useMemo(() => {
        return calculoFibonacci(num);
    }, [num]);

    return (
        <div>
            <p> resultado: {resultadoFibonacci} </p>
        </div>
    )
}

const calculoFibonacci = (num) => {
    console.log('calculando fibonacci');
    return num + 1;
}

export default Exercicio2
import { useEffect } from 'react'

const Exercicio1 = ({ usuario }) => {

    useEffect(() => {
        document.title = `${usuario} logou`;
    });

    return (
        <div>
            <p>o {usuario} logou </p>
        </div>
    )
}

export default Exercicio1
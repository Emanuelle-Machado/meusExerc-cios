import React from 'react'

const Searchbar = ({ setQuery, setCategoria, setActivateSearch }) => {

    const categorias = [
        "Natureza",
        "Pessoas",
        "Esportes",
        "Tecnologia",
        "Animais"
    ]
    return (
        <div className='search-bar'>
            <input
                type="text"
                placeholder='pesquisar fotos'
                onChange={(e) => setQuery(e.target.value)} />
            <button onClick={() => setActivateSearch(true)}>perquisar</button>
            <select onChange={(e) => {
                setCategoria(e.target.value)
                setActivateSearch(true)
            }}>
                {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}> {categoria} </option>
                ))}
            </select>
        </div>
    )
}

export default Searchbar
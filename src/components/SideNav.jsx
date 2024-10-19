import { useState } from "react"
import { first151Pokemon, getFullPokedexNumber } from "../utils"

export default function SideNav(props) {
    const { selectedPokemon, setSelectedPokemon, handleCloseMenu, showSideMenu } = props
    const [searchVal, setSearchVal] = useState('')

    const filteredPokemon = first151Pokemon.filter((elem, elemIndex) => {
        if (getFullPokedexNumber(elemIndex).includes(searchVal)) {
            return true
        }
        if (elem.toLowerCase().includes(searchVal.toLowerCase())) {
            return true
        }
        return false
    })

    return (
        <nav className={' ' + (!showSideMenu ? " open" : '')}>
            <div className={"header " + (!showSideMenu ? " open" : '')}>
                <button onClick={handleCloseMenu} className="open-nav-button">
                    <i className="fa-solid fa-arrow-left-long"></i>
                </button>
                <h1 className="text-gradient">Pokédex</h1>
            </div>
            <input placeholder='E.g. 001 or Bulba..' value={searchVal} onChange={(e) => {
                setSearchVal(e.target.value)
            }} />
            {filteredPokemon.map((pokemon, pokemonIndex) => {
                const truePokemonIndex = first151Pokemon.indexOf(pokemon)
                return(
                    <button key={pokemonIndex}  onClick={() => {
                        setSelectedPokemon(truePokemonIndex)
                        handleCloseMenu()
                    }} className={'nav-card ' + 
                        (pokemonIndex === selectedPokemon ? 'nav-card-selected ' : ' ')}>
                        <p>{getFullPokedexNumber(truePokemonIndex)}</p>
                        <p>{pokemon}</p>
                    </button>
                )
            })}
        </nav>
    )
}

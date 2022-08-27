import React from "react";
import './Search.css'
import filterIcon from '../icons/filter.svg'
import layingIllu from '../icons/laying.svg'


const Search = () =>{
    return (
        <div className="Search">
            <div className="searchContainer">
                <input autoComplete="true" name='search'placeholder="Search Images" className="searchBar" type={'text'} required='true'></input>
                <img className="filterIcon" src={filterIcon} alt='filter icon' />
            </div>
            <div className="resultsContainer">
            <img src={layingIllu} alt='women reading a book' />
            <h1>Hmm! Looks like we have nothing to show</h1>
            </div>
        </div>
    )
}

export default Search;
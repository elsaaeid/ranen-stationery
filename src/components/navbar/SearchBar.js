import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import dataSearch from "./dataSearch"

function SearchBar({placeholder}) {


  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <div className="results d-flex flex-col align-items-center justify-center">
        <span style={{ display: 'block', textAlign: 'center' }}>name: {item.name}</span>
        <span style={{ display: 'block', textAlign: 'center' }}>description: {item.description}</span>
        <span style={{ display: 'block', textAlign: 'center' }}>price: {item.price}</span>
      </div>
    )
  }

  return (
      <header className="SearchBar-header">
        <div className="SearchBar" style={{zIndex: '1'}}>
          <ReactSearchAutocomplete
            items={dataSearch}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            placeholder={placeholder}
          />
        </div>
      </header>
  )
}

export default SearchBar;
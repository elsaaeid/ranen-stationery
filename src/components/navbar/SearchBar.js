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
      <div>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>description: {item.description}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>price: {item.price}</span>
      </div>
    )
  }

  return (
    <div className="SearchBar" style={{zIndex: '1'}}>
      <header className="SearchBar-header">
        <div style={{ width: 400 }}>
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
    </div>
  )
}

export default SearchBar;
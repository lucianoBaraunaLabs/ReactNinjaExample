'use strict'

import React, { PropTypes } from 'react'
import style from './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuário no github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.PropTypes = {
  handleSearch: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired
}

export default Search

'use strict'

import React, { PropTypes } from 'react'
import './actions.css'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Ver respositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
)
export default Actions

Actions.PropTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

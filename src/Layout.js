import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Route,
  Match,
  Miss,
  Link
} from 'react-router-dom'

class Layout extends Component {
  render()
  {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Contactos</Link></li>
      </ul>
    )
  }
}

export default Layout

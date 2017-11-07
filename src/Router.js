import React, {Component} from 'react';

import Contacts from './Contacts'
import Callback from './Callback'
import Campaigns from './Campaigns'
import Layout from './Layout'

import {
  BrowserRouter as Router,
  Route,
  Match,
  Miss,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    Bienvenidos
  </div>
)

const AppRouter = () => (
  <Router>
    <div>
      <Layout/>
      <Route exact path="/" component={Home} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/campaigns" component={Campaigns} />
      <Route path="/callback" component={Callback} />
    </div>
  </Router>
)

export default AppRouter;
export {
  AppRouter
};

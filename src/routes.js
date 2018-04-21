import React from 'react';
import { Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Parks } from './pages/parks'
import { Coasters } from './pages/coasters'
import { Header } from './components/header'

export const Routes = () => (
  <div>
    <Header />

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/parks" component={Parks} />
      <Route exact path="/coasters" component={Coasters} />
    </main>
  </div>
)

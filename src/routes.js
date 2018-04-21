import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Home } from './pages/home'
import { Parks } from './pages/parks'
import { Coasters } from './pages/coasters'

export const Routes = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/parks">Parks</Link>
      <Link to="/coasters">Coasters</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/parks" component={Parks} />
      <Route exact path="/coasters" component={Coasters} />
    </main>
  </div>
)

import React from 'react';
import { Route } from 'react-router-dom'
import { Home } from './pages/home'
import { ParksList } from './pages/parks-list'
import { CoastersList } from './pages/coasters-list'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Explore } from './pages/explore'

export const Routes = () => (
  <div className="app">
    <div className="app__gradient" />
    <Header />
      <main className="app__body">
        <Route exact path="/" component={Home} />
        <Route exact path="/parks" component={ParksList} />
        <Route exact path="/coasters" component={CoastersList} />
        <Route exact path="/explore" component={Explore} />
      </main>
    <Footer />
   </div>
)

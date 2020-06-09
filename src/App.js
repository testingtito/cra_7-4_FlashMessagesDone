import React, { useState } from 'react'
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Terms';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("data_token")));
  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path='/' component='' exact>
          {loggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path='/about-us'>
          <About />
        </Route>
        <Route path='/terms'>
          <Terms />
        </Route>
      </Switch>
      <Footer />

    </BrowserRouter>
  )
}

export default App

import React from 'react'
import Home from 'pages/Home';
// import { v4 as uuidv4 } from 'uuid';
import 'App.css';
import Router from 'shared/Router';

const App = () => {
  return (
      <>
        <Router>
          <Home />
        </Router>
      </>
  )
}

export default App
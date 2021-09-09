import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import getPopular from './features/counter/api'
import { Subreddits } from './features/subreddits/subreddits'
import { Search } from './features/search/Search'
import { Articles } from './features/articles/Articles'

function App() {

  console.log(getPopular())
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h1>JPGs of Reddit</h1>
        </div>
        <Search />
      </header>
      <body>
        <Articles />
        <Subreddits />
      </body>
    </div>
  );
}

export default App;

import './App.scss';
import { Subreddits } from './features/subreddits/subreddits'
import { Search } from './features/search/Search'
import { Articles } from './features/articles/Articles'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={"./wave-icon.jpeg"} id="icon" alt="icon"/>
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

import './App.css';
import Index from './Header/index.js'
import Main from './MainFolder/index'
import NavItem from './Header/NavItem';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Index/>
        <Main/>
      </header>
    </div>
  );
}

export default App;

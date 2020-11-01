import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LeftNav from './Components/LeftNav';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <LeftNav />
        <Main />
      </div>
    </div>
  );
}

export default App;

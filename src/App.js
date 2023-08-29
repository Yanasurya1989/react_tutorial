import logo from './logo.svg';
import './App.css';
import Header from './components/widget/Header'
import MainComponent from './MainComponent';
import FunctionComponent from './FunctionalComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome in my learn class
        </p> */}

        <MainComponent/>
        <FunctionComponent/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

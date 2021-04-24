import logo from './logo.svg';
import './App.css';

function App() {
  var person={
    name: "Dr. Mahfuzur ",
    job: "Singer",
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1>My heading :{person.name+" "+ person.job}</h1>
        <p>My fast React Paragraph.</p>
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

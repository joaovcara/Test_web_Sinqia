import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import api from './services/api/api';

const APIEstado = api("Estado");

const update = {
  Id: 33,
  Sigla: "NW"
}

const insert = {
  Descricao: 'Estado sem sigla'
}

function App() {
  useEffect(() => {
    // APIEstado.get("GetAllEstado").then(result => {
    //     console.log('result', result)
    //   });

    //APIEstado.put("UpdateEstado", update);

    APIEstado.post("InsertEstado", insert);

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

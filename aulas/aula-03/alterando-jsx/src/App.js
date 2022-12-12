import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Erick";
  const newName = name.toUpperCase();

  function sum (a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/300x150"

  return (
    <div className="App">
      <h1>Alterando o JSX </h1>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha Imagem"/>
    </div>
  );
}

export default App;

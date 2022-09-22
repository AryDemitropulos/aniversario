import logo from './logo.svg';
import './App.css';
import { Typer } from './components/Typer';
import { TyperContainer } from './components/TyperContainer';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Footer } from './components/Footer';


function App() {

  const text2 = ["1....", "2....", "3..."]

  return (
    <div className="App">

      <header className="App-header">
        <Header />
        <Main />
        <Footer />

      </header>
    </div>
  );
}

export default App;

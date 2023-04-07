import './App.css';
import Accordion from './components/Accordion/Accordion';
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Main />
      <Accordion />
      <footer>
        <p style={{textAlign: 'center'}} >Gymnasium © {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
}

export default App;

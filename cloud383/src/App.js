import logo from './logo.svg';
import './App.css';

function App() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=895284fb2d2c50a520ea537456963d9c`


async function fetchAPI(){
 const response = await fetch(`${url}`);
  const data = await response.json();
console.log(data)
}
  useEffect(() => {
  fetchAPI()
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

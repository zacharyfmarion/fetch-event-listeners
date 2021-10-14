import axios from "axios";
import './App.css';

function fetchWithAxios() {
  console.log("fetching with axios");
  return axios.get("https://jsonplaceholder.typicode.com/todos/1");
}

function fetchWithVanillaFetch() {
  console.log("fetching with vanilla fetch");
  return fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "GET"
  }).then((res) => res.json());
}

function App() {
  return (
    <div className="App">
      <button onClick={fetchWithAxios}>Fetch with axios</button>
      <button onClick={fetchWithVanillaFetch}>Fetch with vanilla fetch</button> 
    </div>
  );
}

export default App;

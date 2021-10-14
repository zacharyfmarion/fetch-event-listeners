import axios from "axios";
import { useEffect } from "react";

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
  useEffect(() => {
    setTimeout(() => {
      fetchWithAxios();
    }, 5000)

    setTimeout(() => {
      fetchWithVanillaFetch();
    }, 10000)
  }, [])

  return (
    <div className="App">
      Axios call made after 5 seconds, fetch after 10 
    </div>
  );
}

export default App;

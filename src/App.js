import axios from "axios";

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

function postWithAxios() {
  return axios.post("https://jsonplaceholder.typicode.com/posts");
}

function postWithVanillaFetch() {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST"
  }).then((res) => res.json());
}

function App() {
  return (
    <div className="App">
      <button onClick={fetchWithAxios}>Get with axios</button>
      <button onClick={fetchWithVanillaFetch}>Get with vanilla fetch</button> 
      <button onClick={postWithAxios}>Post with axios</button>
      <button onClick={postWithVanillaFetch}>Post with vanilla fetch</button> 
    </div>
  );
}

export default App;

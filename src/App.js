import "./App.css";

// const title = "React";
const welcome = {
  title: "React",
  greeting: "Hey",
};

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}{" "}
      </h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;

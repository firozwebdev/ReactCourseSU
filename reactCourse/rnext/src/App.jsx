import Profile from "./components/Profile";

//1.8.P1
function App() {
  const person = "Tamim";
  const size = 100;
  const age = 39;
  return (
    <div>
      <h1>Hello World</h1>
      <Profile person={person} size={size} age={age} />
    </div>
  );
}

export default App;

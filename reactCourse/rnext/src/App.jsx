import MyApp from "./components/Counter2";
import Counter from "./components/Coutner";
import Gallery from "./components/Gallery";
import Profile from "./components/User";

//1.4.P1
export function App() {
  return (
    <div>
      <h1>This is for practice</h1>
      <Profile />
      <Gallery />
      <Counter />
      <MyApp />
    </div>
  );
}

export default App;

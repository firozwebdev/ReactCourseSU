import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

//1.9.P1
function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Profile>
        <Avatar age="30" />
      </Profile>
    </div>
  );
}

export default App;

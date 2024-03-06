import Gallery, { Profile } from "./components/Gallery";
//1.5.P1
/*
 import Gallery, { Profile } from "./components/Gallery"
 Here Gallery is default import because gallery is defined as default export
 import Gallery, { Profile } from "./components/Gallery";
 But Here Profile is named import because Profile is defined as named export
 */
//
function App() {
  return (
    <div>
      <h1>Main File here..</h1>
      <Profile
    </div>
  );
}

export default App;

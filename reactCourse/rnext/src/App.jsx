import Gallery, { Profile } from "./components/Gallery";
//1.5.P1
/*
 import Gallery, { Profile } from "./components/Gallery"
 Here Gallery is default import because gallery is defined as default export
 import Gallery, { Profile } from "./components/Gallery";
 But Here Profile is named import because Profile is defined as named export
 
 import Gallery from "./components/Gallery"; 
 As Gallery is default import so we can call it by any name 
 import { Profile }  from "./components/Gallery"; 
 As Profile is default import so we can't call it by any name but we use aliase
 import { Profile as MyProfile }  from "./components/Gallery"; 
 */
//
function App() {
  return (
    <div>
      <h1>Main File here..</h1>
      <Profile />
      <Gallery />
    </div>
  );
}

export default App;

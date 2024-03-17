
//3.6.P1
import { useState } from "react";
import Message from "./components/Message";

function App() {

  return (
    <div>
     <Message messageColor="red" />
     <button>Button From Parent</button>
    </div>
  );
}

export default App;

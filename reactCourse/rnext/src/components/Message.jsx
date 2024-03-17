import { useState } from "react";

function Message({ messageColor }) {
  const [color, setColor] = useState(messageColor);
  const changeMessageColorFromChild = () => {
   setColor("blue")
  }

  return (
    <div>
      <h1 style={{ color }}>Hello World</h1>
      <button onClick={changeMessageColorFromChild}>Button From Child</button>
    </div>
  );
}
export default Message;

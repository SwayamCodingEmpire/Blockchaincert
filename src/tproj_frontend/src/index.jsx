import { tproj_backend } from "../../declarations/tproj_backend";

import * as React from "react";
import { render } from "react-dom";
import Navbar from "../components/Navbar";

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await tproj_backend.greet(name);
    setMessage(greeting);
  }

  const greeting = async() =>{ await tproj_backend.greet1(23);
    const [num, setNum] = React.useState(0);
    
  }

  return (
    <>
    <Navbar/>
    <div style={{ "fontSize": "30px" }}>
      <div style={{ "backgroundColor": "blue" }}>
        <p>Greetings, from DFINITY!</p>
        <p>
          {" "}
          Type your message in the Name input field, then click{" "}
          <b> Get Greeting</b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          ></input>
        <button onClick={MyHello}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "
        <span style={{ color: "blue" }}>{message}</span>"
      </div>
    </div>
    </>
  );
};

render(<MyHello />, document.getElementById("app"));

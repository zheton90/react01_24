import { Form } from "./components/Form/Form";
import { Form as FormClass } from "./class-components/Form";
import { Count as CountClass } from "./class-components/Count";
import { Count } from "./components/Count";
import { Child } from "./components/Child";
import { useState } from "react";

import './index.css'

export const App = () => {

  const [name, setName] = useState('Zhen')
  const [count, setCount] = useState(0)
  const arr = ['ivanov', 'petrov', 'sidorov']

  const handelChangeName = (ev) => {
    setName(ev.target.value)
  }

  return (
    <div className="App">

      <h2>Function Components</h2>

      <Form />

      <hr />

      <Count />

      <hr />

      <h3>Parent component</h3>

      <p>{count}</p>

      <input onChange={handelChangeName} />

      <h3>Child component</h3>

      <Child name={name} handelChangeCount={setCount} />

      <h2 style={{ backgroundColor: 'green' }}>Class Components</h2>

      <CountClass count={10} />
      <hr />
      <FormClass />

      {arr.map((item, idx) => <div key={idx}>{item}</div>
      )}
    </div>
  );
}


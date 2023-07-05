import { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const handleCount = (e) => {
    if (e.target.id === "inc") {
      setCounter(counter + 1)
    } else if (e.target.id === "dec") {
      setCounter(counter - 1)
    } else if (e.target.id === "clr") {
      setCounter(0)
    }
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleCount} id="inc">
        INC
      </button>
      <button onClick={() => setCounter(0)} id="clr">
        CLR
      </button>
      <button onClick={handleCount} id="dec">
        DEC
      </button>
    </div>
  )
}

export default Counter

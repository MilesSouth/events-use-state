import { useState } from "react"

const Event = () => {
  let [message, setMessage] = useState("EVENTS")

  const handleClick = (e) => {
    console.log(e)
  }
  const handleChange = (e) => {
    setMessage("STATE")
    console.log(message)
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={handleChange}>Change</button>
    </div>
  )
}

export default Event

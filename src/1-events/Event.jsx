const Event = () => {
  const handleClick = () => {
    alert("You clicked a button")
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Event

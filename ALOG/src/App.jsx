import { useState } from 'react'
import 'style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <label>
        <input type='file' style={{ display: 'none' }}></input>
      </label>
    </>
  )
}

export default App

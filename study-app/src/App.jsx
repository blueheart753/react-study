import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [light, setLight] = useState('Off')
  return (
    <main>
      <div>
        <h1>{light}</h1>
        <button onClick={() => setLight(light == 'On' ? 'Off' : 'On')}>
          {light == 'On' ? 'Off' : 'On'}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  )
}

export default App

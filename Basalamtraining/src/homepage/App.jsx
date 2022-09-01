import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Homepage from './page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App d-flex d-flex flex-row justify-content-center align-items-start">
      <Homepage/>
    </div>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import Homepage from './page'

function App() {


  return (
    <div className="App">
      <h1 className="Name-store mt-0 pb-0">
        <img className='w-icon-Shop-Top' src="store-svgrepo-com.svg" alt="" />
        Easy Store</h1>
      <Homepage/>
    </div>
  )
}

export default App

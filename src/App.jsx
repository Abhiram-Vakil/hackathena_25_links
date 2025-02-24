import { useState } from 'react'
import './App.css'
import logo from './assets/hlogo.svg'
import squid from "./assets/squid.svg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='linkpage'>
      <img src={logo} alt="" className='hlogo'/>
      <div className='title'>
        <h1>BUNDLES</h1>
        <p>The Ultimate Software Set !</p>
      </div>
      <div className='buttons'>
        <button onClick={() => window.open("https://hackathena-25.vercel.app/", "_blank")}>Website</button>
        <button onClick={() => window.open("https://your-link.com", "_blank")}>Judge App</button>
        <button onClick={() => window.open("https://hackathena-25-students.vercel.app/login", "_blank")}>Participants App</button>
        <button onClick={() => window.open("https://t.me/hackathena_25bot", "_blank")}>Telegram Bot</button>
        <button onClick={() => window.open("https://t.me/hackathena_bot", "_blank")}>Shop Bot</button>
        <button onClick={() => window.open("https://your-link.com", "_blank")}>Developer Info</button>
      </div>
      <img src={squid} alt="" className='squid' />
    </div>
  )
}

export default App

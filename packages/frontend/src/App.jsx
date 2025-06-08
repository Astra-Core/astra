import { useState, useEffect } from 'react'
import { invoke } from '@tauri-apps/api/core'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    // Call Tauri API
    const getGreeting = async () => {
      try {
        const response = await invoke('say_hello')
        setGreeting(response)
      } catch (error) {
        console.error('Error calling Tauri:', error)
      }
    }
    
    getGreeting()
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Tauri</h1>
      {greeting && (
        <div className="tauri-greeting">
          <p>{greeting}</p>
        </div>
      )}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

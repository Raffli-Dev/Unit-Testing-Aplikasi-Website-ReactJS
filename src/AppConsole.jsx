import { useState } from 'react'
import './App.css'
function AppConsole() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 data-testid="web-title">Raffli Projek</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Like Button  {count}
        </button>
        <h3>Versi Pengecekan Cosole Terminal</h3>
        <p>Jika anda ingin versi UI <a href="/page2">Klik</a></p>
      </div>
    </div>
  )
}

export default AppConsole

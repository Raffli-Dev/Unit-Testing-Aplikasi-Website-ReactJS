import { useState } from 'react'
import './App.css'
function AppUi() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 data-testid="web-title">Raffli Projek Halaman 2</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Like Button  {count}
        </button>
        <h3>Versi Pengecekan User Interface</h3>
        <p>Jika anda ingin versi Console <a href="/">Klik</a></p>
      </div>
    </div>
  )
}

export default AppUi

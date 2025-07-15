import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Header with logos */}
      <div className="flex space-x-6 mb-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
          <img src={viteLogo} className="h-20 w-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition">
          <img src={reactLogo} className="h-20 w-20" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Vite + React + Tailwind</h1>

      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center space-y-4 mb-6">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transform active:scale-95 transition"
        >
          count is {count}
        </button>
        <p className="text-gray-600 text-center">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

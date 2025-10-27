import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
      <h1 className="text-5xl font-extrabold mb-6 animate-pulse drop-shadow-lg">
        🚀 Tailwind is Working!
      </h1>
      <p className="text-lg mb-8">
        A colorful gradient background + animation test.
      </p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl shadow-md hover:bg-indigo-100 active:scale-95 transition-all"
      >
        You clicked {count} times
      </button>
    </div>
  )
}

export default App

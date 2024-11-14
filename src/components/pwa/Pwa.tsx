import React from 'react'
import useStore from './store'

const Pwa: React.FC = () => {
  const { count, increase, reset } = useStore()

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-semibold mb-4">Progressive Web App</h1>
        <h2 className="text-xl mb-4">Count: {count}</h2>
        <div className="space-x-4">
          <button 
            onClick={increase} 
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            Increase
          </button>
          <button 
            onClick={reset} 
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pwa

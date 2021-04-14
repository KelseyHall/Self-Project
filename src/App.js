import Header from './components/Header'
import './App.scss'
import React from 'react'
import AddProductPage from './components/AddProductPage'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <AddProductPage onSubmit={() => {}} />
      </div>
    </div>
  )
}

export default App

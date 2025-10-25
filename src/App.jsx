import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      {/* More sections to be added */}
    </div>
  )
}

export default App

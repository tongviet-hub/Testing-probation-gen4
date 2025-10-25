import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Overview from './components/Overview'
import Objectives from './components/Objectives'
import Domains from './components/Domains'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Overview />
      <Objectives />
      <Domains />
      <Footer />
    </div>
  )
}

export default App

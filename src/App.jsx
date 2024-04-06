import { useState } from 'react'
import './App.css'
import Top from './components/top'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'
import './index.scss'

function App() {
  const [count, setCount] = useState(0)

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Top handleScroll={handleScroll}></Top>
      <Skills></Skills>
      <Projects handleScroll={handleScroll}></Projects>
      <Footer></Footer>
    </>
  )
}

export default App

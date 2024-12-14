import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className='mx-auto max-w-7xl overflow-x-hidden antialiased'>
      <div className='bg-image bg-cover bg-fixed bg-center h-full'>
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </div>
      </div>
    </main>
  )
}

export default App
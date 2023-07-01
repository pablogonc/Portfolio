import React, { useEffect } from 'react'
import { NavBar } from './common/navBar/NavBar'
import { Me } from './pages/me/Me'
import { Expirience } from './pages/Expirience/Expirience'
import { Skills } from './pages/skills/Skills'
import { Title } from './common/navBar/Title'

const App: React.FC<{}> = () => {
  useEffect(() => {
    document.title = 'Pablo Goncalves'
  }, [])

  return (
    <>
      <NavBar />

      <section id='Sobre mí'>
        <Title>Sobre mí</Title>
        <Me />
      </section>

      <section id='Experiencia'>
        <Title>Experiencia</Title>
        <Expirience />
      </section>

      <section id='Aptitudes'>
        <Title>Aptitudes</Title>
        <Skills />
      </section>

    </>
  )
}

export default App

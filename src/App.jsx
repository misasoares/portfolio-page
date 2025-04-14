import { useState } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import { theme } from './styles/theme'
import Header from './components/Header'
import ImpactSection from './components/ImpactSection'
import { Container } from './styles/AppStyles'
import Projects from './components/Projects'
import Background from './components/Background'
import LanguageSwitcher from './components/LanguageSwitcher'
import { LanguageProvider } from './contexts/LanguageContext'
import Specializations from './components/Specializations'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <ParallaxProvider>
          <GlobalStyles />
          <Background />
          <LanguageSwitcher />
          <Container>
            <Header />
            <ImpactSection />
            <Specializations />
            <Projects />
          </Container>
        </ParallaxProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

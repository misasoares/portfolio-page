import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from 'styled-components';
import Background from './components/Background';
import Header from './components/Header';
import ImpactSection from './components/ImpactSection';
import LanguageSwitcher from './components/LanguageSwitcher';
import Projects from './components/Projects';
import Specializations from './components/Specializations';
import { LanguageProvider } from './contexts/LanguageContext';
import { Container } from './styles/AppStyles';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';

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

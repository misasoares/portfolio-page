import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { HeaderContainer, Title, Description, SocialButton, ButtonContainer, ContactInfo } from './styles'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translations'

const Header = () => {
  const { language } = useLanguage()
  const { header } = translations[language]

  return (
    <HeaderContainer>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>{header.title}</Title>
        <Description>{header.description}</Description>
    
        <ButtonContainer>
          <SocialButton 
            href="https://linkedin.com/in/misaelsoares" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </SocialButton>
          <SocialButton 
            href="https://github.com/misasoares" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </SocialButton>
        </ButtonContainer>
        <ContactInfo>
          <a href={`mailto:${header.contact.email}`}>
            <FaEnvelope /> {header.contact.email}
          </a>
          <a href={`https://wa.me/${header.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> {header.contact.whatsapp}
          </a>
        </ContactInfo>
      </motion.div>
    </HeaderContainer>
  )
}

export default Header
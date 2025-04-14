import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import { SwitcherButton } from './styles'

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SwitcherButton onClick={toggleLanguage}>
        {language === 'pt-BR' ? '🇺🇸 EN' : '🇧🇷 PT'}
      </SwitcherButton>
    </motion.div>
  )
}

export default LanguageSwitcher
import { motion } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { SectionContainer, ImpactPoint, ImpactList, SectionTitle } from './styles'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translations'

const ImpactSection = () => {
  const { language } = useLanguage()
  const { impact } = translations[language]

  return (
    <SectionContainer>
      <SectionTitle>{impact.title}</SectionTitle>
      <Parallax translateY={[-20, 20]}>
        <ImpactList>
          {impact.points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ImpactPoint>
                <span className="number">0{index + 1}</span>
                <p>{point}</p>
              </ImpactPoint>
            </motion.div>
          ))}
        </ImpactList>
      </Parallax>
    </SectionContainer>
  )
}

export default ImpactSection
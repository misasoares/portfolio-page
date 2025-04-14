import { motion } from 'framer-motion'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translations'
import { SectionContainer, SectionTitle, SpecGrid, SpecCard, SkillList } from './styles'

const Specializations = () => {
  const { language } = useLanguage()
  const { specializations } = translations[language]

  return (
    <SectionContainer>
      <SectionTitle>{specializations.title}</SectionTitle>
      <SpecGrid>
        {specializations.categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <SpecCard>
              <h3>{category.name}</h3>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIndex * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </SkillList>
            </SpecCard>
          </motion.div>
        ))}
      </SpecGrid>
    </SectionContainer>
  )
}

export default Specializations
import { motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { ProjectsContainer, ProjectCard, ProjectGrid, SectionTitle, ProjectLink } from './styles'
import { useLanguage } from '../../contexts/LanguageContext'
import { translations } from '../../translations'

const Projects = () => {
  const { language } = useLanguage()
  const { projects } = translations[language]

  return (
    <ProjectsContainer>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle>{projects.title}</SectionTitle>
        <ProjectGrid>
          {projects.items.map((project, index) => (
            <ProjectCard
              key={index}
              as={motion.div}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="header">
                <h3>{project.title}</h3>
                {project.link && (
                  <ProjectLink 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </ProjectLink>
                )}
              </div>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech?.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </motion.div>
    </ProjectsContainer>
  )
}

export default Projects
import styled from 'styled-components'

export const ProjectsContainer = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(180deg, 
    ${props => props.theme.colors.background} 0%,
    rgba(108, 99, 255, 0.1) 100%);
`

export const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, 
    ${props => props.theme.colors.primary}, 
    ${props => props.theme.colors.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: ${props => props.theme.colors.accent};
    border-radius: 2px;
  }
`

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

    .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;

    span {
      background: ${props => props.theme.colors.primary}33;
      color: ${props => props.theme.colors.primary};
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.9rem;
    }
  }
`

export const ConfidentialProject = styled(ProjectCard)`
  background: linear-gradient(135deg,
    ${props => props.theme.colors.primary}22,
    ${props => props.theme.colors.accent}22);
  border: 2px solid ${props => props.theme.colors.primary}33;

  ul {
    list-style-position: inside;
    margin-top: 1rem;

    li {
      margin-bottom: 0.5rem;
      color: ${props => props.theme.colors.text}dd;
    }
  }
`


export const ProjectLink = styled.a`
  color: ${props => props.theme.colors.accent};
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
  }
`
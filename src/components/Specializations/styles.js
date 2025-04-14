import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding: 6rem 1rem;
  position: relative;
`

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
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
    width: 60px;
    height: 4px;
    background: ${props => props.theme.colors.accent};
    border-radius: 2px;
  }
`

export const SpecGrid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const SpecCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  }

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
`

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: ${props => props.theme.colors.text};
    font-size: 1rem;

    &:last-child {
      border-bottom: none;
    }
  }
`
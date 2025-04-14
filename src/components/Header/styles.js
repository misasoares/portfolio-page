import styled from 'styled-components'

export const HeaderContainer = styled.header`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 3.5rem;
  }
`

export const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text};
  max-width: 100%;
  padding: 0 1rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 1.5rem;
    max-width: 600px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`

export const LinkedInButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: transform 0.2s ease;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    svg {
      color: ${props => props.theme.colors.accent};
      font-size: 1.2rem;
    }
    
    &:hover {
      color: ${props => props.theme.colors.accent};
      transform: translateX(5px);
    }
  }
`

export const SocialButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.875rem;
  transition: transform 0.2s ease;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }
`
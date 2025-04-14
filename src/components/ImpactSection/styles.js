import styled from 'styled-components'

export const SectionContainer = styled.section`
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;
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

export const ImpactList = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const ImpactPoint = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  min-height: 200px;


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      ${props => props.theme.colors.primary},
      transparent
    );
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  }

  .number {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    font-weight: bold;
    opacity: 0.1;
    font-family: ${props => props.theme.fonts.heading};
    background: linear-gradient(135deg,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.accent}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${props => props.theme.colors.text};
    position: relative;
    z-index: 1;
  }
`
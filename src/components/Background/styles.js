import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(100px, 100px) rotate(180deg); }
  100% { transform: translate(0, 0) rotate(360deg); }
`

export const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(to bottom right, #0f172a, #1e293b);
`

export const GradientOrb = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.5;
  animation: ${float} 20s infinite ease-in-out;

  &.orb-1 {
    background: ${props => props.theme.colors.primary};
    top: -200px;
    left: -200px;
    animation-delay: -2s;
  }

  &.orb-2 {
    background: ${props => props.theme.colors.accent};
    bottom: -300px;
    right: -200px;
    animation-delay: -5s;
    animation-duration: 25s;
  }

  &.orb-3 {
    background: ${props => props.theme.colors.secondary};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: -8s;
    animation-duration: 30s;
  }
`
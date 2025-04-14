import styled from 'styled-components'

export const SwitcherButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`
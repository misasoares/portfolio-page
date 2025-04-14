import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  // max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background: rgba(17, 17, 17, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin-top: 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
`
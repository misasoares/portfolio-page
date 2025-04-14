import { BackgroundContainer, GradientOrb } from './styles'

const Background = () => {
  return (
    <BackgroundContainer>
      <GradientOrb className="orb-1" />
      <GradientOrb className="orb-2" />
      <GradientOrb className="orb-3" />
    </BackgroundContainer>
  )
}

export default Background
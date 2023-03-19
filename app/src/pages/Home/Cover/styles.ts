import styled from 'styled-components'

export const CoverContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3.5rem;
  align-items: center;
  padding: 5.75rem 0;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;

    img {
      width: 300px;
    }
  }
`

export const InfoCoverContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.25rem;

  h1 {
    font-size: 3rem;
    line-height: 130%;
    font-weight: 800;
  }

  @media (max-width: 430px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 3rem;

    h1 {
      text-align: center;
    }
  }
`

const ICON_COLOR = {
  coffe: 'purple',
  package: 'base-text',
  cart: 'yellow-dark',
  clock: 'yellow',
} as const

interface iconProps {
  iconColor: keyof typeof ICON_COLOR
}

export const Icon = styled.span<iconProps>`
  background-color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
  color: ${(props) => props.theme.white};
  padding: 0.5rem 0.5rem 0.2rem 0.5rem;
  border-radius: 99999px;
`

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 0;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

const BLUR_COLOR = {
  purpleBlur: 'purple',
  yellowBlur: 'yellow',
} as const

interface BluredAreasProps {
  left: string
  top: string
  blurColor: keyof typeof BLUR_COLOR
}

export const BluredAreas = styled.span<BluredAreasProps>`
  width: 90px;
  height: 90px;
  position: absolute;
  background-color: ${(props) => props.theme[BLUR_COLOR[props.blurColor]]};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  z-index: -50;
  filter: blur(110px);
`

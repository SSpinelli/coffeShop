import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding-top: 4rem;
  gap: 3rem;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const TitleContainer = styled.div`
  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
    line-height: 130%;
    font-weight: 800;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoOrderContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  background-color: ${(props) => props.theme.background};
  border-radius: 6px 36px;

  &::before {
    content: '';
    position: absolute;
    width: 479px;
    height: 260.5px;
    top: -1px;
    left: -1px;
    border-radius: 6px 36px;
    background-image: linear-gradient(
      45deg,
      #dbac2c,
      #c47f17,
      #4b2995,
      #8047f8
    );
    z-index: -50;
  }
`
const ICON_COLOR = {
  purple: 'purple',
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
} as const

interface ParagraphInfoProps {
  iconColor: keyof typeof ICON_COLOR
}

export const ParagraphInfo = styled.p<ParagraphInfoProps>`
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: center;
  justify-content: center;
  gap: 0 0.75rem;

  div {
    padding: 0.5rem 0.5rem 0.2rem 0.5rem;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
    border-radius: 9999px;
    grid-row: 1 / 3;
  }

  span {
    grid-column: 2 / 3;
  }
`

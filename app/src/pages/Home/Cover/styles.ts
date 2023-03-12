import styled from 'styled-components'

export const CoverContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3.5rem;
  align-items: center;
  padding: 5.75rem 0;
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

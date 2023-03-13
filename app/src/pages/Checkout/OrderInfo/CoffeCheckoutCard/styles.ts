import styled from 'styled-components'

export const CoffeCheckouCardContainer = styled.div`
  min-width: 368px;
  padding: 0 40px;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const MainInfoCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding: 1.5rem 0;
`

export const QuantityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-family: 'Roboto', sans-serif;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const PlusAndMinusContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.531rem;
  min-width: 72px;
  min-height: 32px;
  cursor: pointer;

  color: ${(props) => props.theme['base-title']};
`

export const PlusAndMinusButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.purple};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
  gap: 0.25rem;
  align-items: center;
  padding: 0.406rem 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  border: 0;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const Price = styled.span`
  display: flex;
  gap: 0.3rem;
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;
  font-weight: 700;
`

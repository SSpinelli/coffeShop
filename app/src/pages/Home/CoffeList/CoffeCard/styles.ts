import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  position: relative;
  min-width: 256px;
  min-height: 310px;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    line-height: 130%;
  }

  img {
    position: absolute;
    top: -20px;
  }
`

export const TagContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  margin-top: 85px;
`

export const Tag = styled.span`
  padding: 0.25rem 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  font-weight: bold;
  line-height: 130%;
  border-radius: 100px;
`

export const CoffeDescription = styled.p`
  font-size: 0.875rem;
  line-height: 130%;
  text-align: center;
  font-weight: 400;
  padding: 0 20px;
  color: ${(props) => props.theme['base-label']};
`

export const PriceAndQuantity = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1.5rem;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 31.2px;
    text-align: right;
  }

  p span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 18.2px;
    padding-right: 0.2rem;
  }
`

export const Quantity = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.531rem;
  min-width: 72px;
  min-height: 38px;
  cursor: pointer;

  color: ${(props) => props.theme['base-title']};

  span {
    display: flex;
    align-items: center;
  }
`
export const PlusAndMinusButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const AddToCart = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['purple-dark']};
  padding: 0.5rem;
  color: ${(props) => props.theme.white};
  min-height: 38px;
  min-width: 38px;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.1s;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.purple};
  }

  &:disabled {
    background-color: ${(props) => props.theme['base-hover']};
    cursor: not-allowed;
  }
`

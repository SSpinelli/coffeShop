import styled from 'styled-components'

export const HeaderComponent = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
`

export const CityAndCartContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  position: relative;

  a {
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 8px;
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.5rem 0.5rem 0.26rem 0.5rem;

    transition: background-color 0.1s, color 0.1s;
  }
`

export const CityAndUF = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 8px;
  color: ${(props) => props.theme['purple-dark']};
  font-size: 0.875rem;
  line-height: 130%;
  padding: 0.5rem;
`

export const QuantityInCart = styled.span`
  position: absolute;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme['yellow-light']};
`

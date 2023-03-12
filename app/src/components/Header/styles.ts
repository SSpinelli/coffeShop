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

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;

    background-color: ${(props) => props.theme['purple-light']};
    border-radius: 8px;
    color: ${(props) => props.theme['purple-dark']};
    font-size: 0.875rem;
    line-height: 130%;
    padding: 0.5rem;
  }

  a {
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 8px;
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.5rem 0.5rem 0.26rem 0.5rem;
  }
`

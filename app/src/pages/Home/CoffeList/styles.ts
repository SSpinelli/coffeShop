import styled from 'styled-components'

export const CoffeListMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const CoffeListContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.5rem 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`

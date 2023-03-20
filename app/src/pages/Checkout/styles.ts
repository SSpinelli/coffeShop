import styled from 'styled-components'

export const FormContainer = styled.form`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 448px;
  justify-content: space-around;

  h2 {
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`
export const UserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 589px) {
    width: 90vw;
    margin: 0 auto;
    min-width: 321.3px;
  }
`

export const OrderInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 589px) {
    width: 90vw;
    margin: 0 auto;
    min-width: 321.3px;
  }
`

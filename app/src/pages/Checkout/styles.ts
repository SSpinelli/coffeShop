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
`
export const UserInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const OrderInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

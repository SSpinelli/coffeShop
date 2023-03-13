import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`
export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 22px 1fr;
  justify-content: center;
  align-items: center;
  gap: 0.125rem;

  h3 {
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    grid-column: 2 / 3;
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    grid-column: 2 / 3;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  border: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  border-radius: 6px;
  line-height: 160%;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

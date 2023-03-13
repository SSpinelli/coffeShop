import styled from 'styled-components'

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr 60px;
  gap: 16px 12px;

  .street {
    grid-column: 1 / 4;
  }

  .moreInfo {
    grid-column: 2 / 4;
  }
`

export const Input = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 18.2px;

  &:focus {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  &:active {
    outline: 1px solid ${(props) => props.theme['yellow-dark']};
  }
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
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 130%;
    grid-column: 2 / 3;
  }
`

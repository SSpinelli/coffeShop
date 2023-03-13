import styled from 'styled-components'

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
  min-width: 368px;
  padding-top: 40px;
`

export const TotalInfoContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  p {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    line-height: 130%;
  }

  h3 {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 26px;
    font-weight: 700;
  }
`

export const SubmitButton = styled.button`
  border: 0;
  padding: 0.75rem 0;
  background-color: ${(props) => props.theme.yellow};
  border-radius: 6px;
  cursor: pointer;

  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

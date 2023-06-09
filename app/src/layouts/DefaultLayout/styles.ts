import styled from 'styled-components'

export const DefautLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 10rem;
  width: 90rem;

  @media (max-width: 768px) {
    overflow-x: hidden;
    padding: 2rem;
    width: 100%;
  }
`

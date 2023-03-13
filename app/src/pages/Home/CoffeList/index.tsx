import { CoffeCard } from './CoffeCard'

import { CoffeListMain, CoffeListContainer } from './styles'
import { coffes } from './data/coffe'

export function CoffeList() {
  return (
    <CoffeListMain>
      <h2 style={{ marginBottom: '40px' }}>Nossos cafés</h2>
      <CoffeListContainer style={{ paddingBottom: '90px' }}>
        {coffes.map((coffe) => {
          return <CoffeCard key={coffe.name} data={coffe} />
        })}
      </CoffeListContainer>
    </CoffeListMain>
  )
}

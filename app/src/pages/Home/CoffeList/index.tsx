import { CoffeCard } from './CoffeCard'

import { CoffeListMain, CoffeListContainer } from './styles'

export function CoffeList() {
  return (
    <CoffeListMain>
      <h2 style={{ marginBottom: '40px' }}>Nossos cafés</h2>
      <CoffeListContainer style={{ paddingBottom: '90px' }}>
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
        <CoffeCard />
      </CoffeListContainer>
    </CoffeListMain>
  )
}

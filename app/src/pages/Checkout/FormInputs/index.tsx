import { MapPinLine } from 'phosphor-react'
import { FormInputContainer, InputGrid, Input, TitleContainer } from './styles'

export function FormInputs() {
  return (
    <FormInputContainer>
      <TitleContainer>
        <MapPinLine />
        <h3>Endereço de Entrega</h3>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </TitleContainer>
      <InputGrid>
        <Input type="text" placeholder="CEP" />
        <Input type="text" placeholder="Rua" className="street" />
        <Input type="text" placeholder="Número" />
        <Input type="text" placeholder="Complemento" className="moreInfo" />
        <Input type="text" placeholder="Bairro" />
        <Input type="text" placeholder="Cidade" />
        <Input type="text" placeholder="UF" />
      </InputGrid>
    </FormInputContainer>
  )
}

import { MapPinLine } from 'phosphor-react'
import { FormInputContainer, InputGrid, Input, TitleContainer } from './styles'
import { FieldValues, UseFormRegister } from 'react-hook-form'

interface iFormInput {
  register: UseFormRegister<FieldValues>
}

export function FormInputs({ register }: iFormInput) {
  return (
    <FormInputContainer>
      <TitleContainer>
        <MapPinLine />
        <h3>Endereço de Entrega</h3>
        <p>Informe o endereço onde deseja receber seu pedido</p>
      </TitleContainer>
      <InputGrid>
        <Input type="text" placeholder="CEP" {...register('cep')} />
        <Input
          type="text"
          placeholder="Rua"
          className="street"
          {...register('rua')}
        />
        <Input type="text" placeholder="Número" {...register('numero')} />
        <Input
          type="text"
          placeholder="Complemento"
          className="moreInfo"
          {...register('complemento')}
        />
        <Input type="text" placeholder="Bairro" {...register('bairro')} />
        <Input type="text" placeholder="Cidade" {...register('cidade')} />
        <Input type="text" placeholder="UF" {...register('uf')} />
      </InputGrid>
    </FormInputContainer>
  )
}

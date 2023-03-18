import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import {
  addItemToOrderAction,
  decreaseQuantityOfItemAction,
  eraseAllItensAction,
  increaseQuantityOfItemAction,
  removeItemFromOrderAction,
} from '../reducer/action'
import { handleReducer, iOrder } from '../reducer/reducer'

// Types
export interface Address {
  cep: string
  rua: string
  numero: string
  moreInfo?: string
  bairro: string
  cidade: string
  uf: string
}

interface OrderContextType {
  order: iOrder[]
  paymentMethod: string
  address: Address
  addItemToOrder: (newItem: iOrder) => void
  removeItemFromOrder: (id: string) => void
  decreaseQtdOfItem: (id: string) => void
  increaseQtdOfItem: (id: string) => void
  changePaymentMethod: (method: string) => void
  changeAddress: (data: Address) => void
  eraseAllItensInOrder: () => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, dispatchToOrder] = useReducer(
    handleReducer,
    [],
    (initialState) => {
      const storedStateAtJSON = localStorage.getItem(
        '@coffe-shop:order-state-1.0.0',
      )

      if (storedStateAtJSON) {
        return JSON.parse(storedStateAtJSON)
      }

      return initialState
    },
  )
  const [paymentMethod, setPaymentMethod] = useState('')
  const [address, setAddress] = useState<Address>({
    cep: '',
    rua: '',
    numero: '',
    moreInfo: '',
    bairro: '',
    cidade: '',
    uf: '',
  })

  function addItemToOrder(newItem: iOrder) {
    dispatchToOrder(addItemToOrderAction(newItem))
  }

  function removeItemFromOrder(id: string) {
    dispatchToOrder(removeItemFromOrderAction(id))
  }

  function decreaseQtdOfItem(id: string) {
    dispatchToOrder(decreaseQuantityOfItemAction(id))
  }

  function increaseQtdOfItem(id: string) {
    dispatchToOrder(increaseQuantityOfItemAction(id))
  }

  function changePaymentMethod(method: string) {
    setPaymentMethod(method)
  }

  function changeAddress(data: Address) {
    setAddress({ ...data })
  }

  function eraseAllItensInOrder() {
    dispatchToOrder(eraseAllItensAction())
  }

  useEffect(() => {
    const stateOrderJSON = JSON.stringify(order)
    if (address.cep !== '') {
      const stateAddressJSON = JSON.stringify(address)
      localStorage.setItem('@coffe-shop:address-state-1.0.0', stateAddressJSON)
    }

    localStorage.setItem('@coffe-shop:order-state-1.0.0', stateOrderJSON)
  }, [order, address])

  useEffect(() => {
    const storedAddressStateAtJSON = localStorage.getItem(
      '@coffe-shop:address-state-1.0.0',
    )
    if (storedAddressStateAtJSON) {
      setAddress(JSON.parse(storedAddressStateAtJSON))
    }
  }, [])

  return (
    <OrderContext.Provider
      value={{
        order,
        addItemToOrder,
        removeItemFromOrder,
        decreaseQtdOfItem,
        increaseQtdOfItem,
        changePaymentMethod,
        paymentMethod,
        address,
        changeAddress,
        eraseAllItensInOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

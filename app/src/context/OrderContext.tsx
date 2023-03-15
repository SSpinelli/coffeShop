import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToOrderAction,
  removeItemFromOrderAction,
} from '../reducer/action'
import { handleReducer, iOrder } from '../reducer/reducer'

// Types
interface OrderContextType {
  order: iOrder[]
  addItemToOrder: (newItem: iOrder) => void
  removeItemFromOrder: (id: string) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, dispatchToOrder] = useReducer(handleReducer, [])

  function addItemToOrder(newItem: iOrder) {
    dispatchToOrder(addItemToOrderAction(newItem))
  }

  function removeItemFromOrder(id: string) {
    dispatchToOrder(removeItemFromOrderAction(id))
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addItemToOrder,
        removeItemFromOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

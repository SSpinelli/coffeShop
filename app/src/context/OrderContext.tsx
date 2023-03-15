import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToOrderAction,
  decreaseQuantityOfItemAction,
  increaseQuantityOfItemAction,
  removeItemFromOrderAction,
} from '../reducer/action'
import { handleReducer, iOrder } from '../reducer/reducer'

// Types
interface OrderContextType {
  order: iOrder[]
  addItemToOrder: (newItem: iOrder) => void
  removeItemFromOrder: (id: string) => void
  decreaseQtdOfItem: (id: string) => void
  increaseQtdOfItem: (id: string) => void
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

  function decreaseQtdOfItem(id: string) {
    dispatchToOrder(decreaseQuantityOfItemAction(id))
  }

  function increaseQtdOfItem(id: string) {
    dispatchToOrder(increaseQuantityOfItemAction(id))
  }

  return (
    <OrderContext.Provider
      value={{
        order,
        addItemToOrder,
        removeItemFromOrder,
        decreaseQtdOfItem,
        increaseQtdOfItem,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

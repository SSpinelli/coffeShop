import { ActionTypes } from './action'

export interface iOrder {
  name: string
  id: string
  thumbnail: string
  price: string
  quantity: number
}

export function handleReducer(state: iOrder[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_ORDER:
      return [...state, action.payload]
    case ActionTypes.REMOVE_ITEM_FROM_ORDER: {
      const newOrder = state.filter((item) => item.id !== action.payload)
      return newOrder
    }
    case ActionTypes.DECREASE_QTD_OF_ITEM: {
      const newOrder = state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item
      })
      return newOrder
    }
    case ActionTypes.INCREASE_QTD_OF_ITEM: {
      const newOrder = state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        return item
      })
      return newOrder
    }
    case ActionTypes.ERASE_ALL_ITENS:
      return []
    default:
      return state
  }
}

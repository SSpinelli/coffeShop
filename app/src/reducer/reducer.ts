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
    default:
      return state
  }
}

import { iOrder } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_ORDER = 'ADD_ITEM_TO_ORDERD',
  REMOVE_ITEM_FROM_ORDER = 'REMOVE_ITEM_FROM_ORDER',
  DECREASE_QTD_OF_ITEM = 'DECREASE_QTD_OF_ITEM',
  INCREASE_QTD_OF_ITEM = 'INCREASE_QTD_OF_ITEM',
}

export function addItemToOrderAction(newItem: iOrder) {
  return {
    type: ActionTypes.ADD_ITEM_TO_ORDER,
    payload: newItem,
  }
}

export function removeItemFromOrderAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_ORDER,
    payload: id,
  }
}

export function decreaseQuantityOfItemAction(id: string) {
  return {
    type: ActionTypes.DECREASE_QTD_OF_ITEM,
    payload: id,
  }
}

export function increaseQuantityOfItemAction(id: string) {
  return {
    type: ActionTypes.INCREASE_QTD_OF_ITEM,
    payload: id,
  }
}

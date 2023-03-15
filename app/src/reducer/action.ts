import { iOrder } from './reducer'

export enum ActionTypes {
  ADD_ITEM_TO_ORDER = 'ADD_ITEM_TO_ORDERD',
  REMOVE_ITEM_FROM_ORDER = 'REMOVE_ITEM_FROM_ORDER',
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

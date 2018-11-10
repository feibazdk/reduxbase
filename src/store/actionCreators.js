import { CHANGE_INPUT_VALUE, ADD_LIST, DELS_ROW } from './actionTypes'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
        value
})

export const getAddListAction = () => ({
    type: ADD_LIST
})

export const getDelsrowAction = (index) => ({
    type: DELS_ROW,
    index
})
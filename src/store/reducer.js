import {CHANGE_INPUT_VALUE, ADD_LIST, DELS_ROW} from './actionTypes'

const defaultState = {
    inputVal: "请输入内容",
    list: []
}

export default (state = defaultState, action) => {

    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputVal = action.value;

        return newState;
    }

    if(action.type === ADD_LIST) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputVal);
        newState.inputVal = "";

        return newState
    }

    if(action.type === DELS_ROW) {
        console.log(action.index)
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);

        return newState;
    }

    console.log(state, action)

    return state
}
import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

export const isLoading = (state = false, action) => {
    let newState = null
    switch(action.type) {
        case 'BEGIN_FETCH':
            newState = true
            return newState
        case 'FETCH_SUCCESS':
            newState = false
            return newState
        default:
            return state
    }
}

const makes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MAKES':
            return action.value
        case 'DELETE_MAKE':
            let newState = [...state]
            newState.splice(action.value, 1);
            return newState;
        default:
            return state
    }
}

export default combineReducers({ user, cars, makes, isLoading })
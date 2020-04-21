const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const deleteMake = index => {
    return {
        type: 'DELETE_MAKE',
        value: index
    }
}

export const beginFetch = () => {
    return {
        type: 'BEGIN_FETCH'
    }
}
export const fetchSuccess = () => {
    return {
        type: 'FETCH_SUCCESS'
    }
}

export const fetchMakes = () => {
    return (dispatch) => {
        dispatch(beginFetch())
        fetch(url)
            .then(res => res.json())
            .then(json => dispatch({type: 'FETCH_MAKES', value: json.Results}))
            .then(() => dispatch(fetchSuccess()))
    }
}
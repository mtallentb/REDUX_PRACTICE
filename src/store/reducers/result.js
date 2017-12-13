import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            let randomID = Math.floor(Math.random() * 100);
            console.log(randomID);
            return {
                ...state,
                results: state.results.concat({ id: randomID, value: action.value })
            }
        case actionTypes.DELETE_RESULT:
            const newArr = state.results.filter(result => result.id !== action.id)
            return {
                ...state,
                results: newArr

            }
    }
    return state;

};

export default reducer;
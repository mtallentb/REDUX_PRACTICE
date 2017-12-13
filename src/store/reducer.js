import * as actionTypes from'./actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            let randomID = Math.floor(Math.random() * 100);
            console.log(randomID);
            return {
                ...state,
                results: state.results.concat({id: randomID, value: state.counter})
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
export function handleActions(reducers, initialState = {}) {
    return function (state = initialState, action) {
        var reducer = reducers.find((reducer) => reducer.type === action.type);
        return reducer ? reducer.reducer(state, action) : state;
    };
}

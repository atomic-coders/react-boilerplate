export default function (dispatch) {
    return {
        increment: () => {
            dispatch({type: 'ChangeCount', payload: {count: 1}});
        },
        decrement: () => {
            dispatch({type: 'ChangeCount', payload: {count: -1}});
        }
    };
}

export default function (dispatch) {
    return {
        sendNotification: (type, message) => {
            dispatch({type: 'Notification', payload: {type, message}});
        },
        dismissNotification: () => {
            dispatch({type: 'DismissNotification'});
        }
    };
}

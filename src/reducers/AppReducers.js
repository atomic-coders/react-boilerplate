import {handleActions} from './Actions';

export default handleActions([
    {
        type: 'Notification',
        reducer: (state, action) => {
            return Object.assign({}, state, {
                alertType: action.payload.type,
                message: action.payload.message
            });
        }
    },
    {
        type: 'DismissNotification',
        reducer: state => {
            return Object.assign({}, state, {
                alertType: undefined,
                message: undefined
            });
        }
    }
]);

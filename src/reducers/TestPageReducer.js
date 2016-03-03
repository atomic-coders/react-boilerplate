import {handleActions} from './Actions';

export default handleActions([
    {
        type: 'ChangeCount',
        reducer: (state, action) => {
            return Object.assign({}, state, {
                count: state.count + action.payload.count
            });
        }
    }
], {count: 0});

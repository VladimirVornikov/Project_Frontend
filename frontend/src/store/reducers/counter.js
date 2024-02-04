const defaultState = 1;

const INCR = "INCR";
const DECR = "DECR";
const SET = "SET";

export const counterProduct = (state = defaultState, action) => {
    switch (action.type) {
        case INCR:
            return state < 25 ? state + 1 : state;
        case DECR:
            return state > 1 ? state - 1 : state;
        case SET:
            return action.payload > 1 && action.payload < 25 ? action.payload : state;
        default:
            return state;
    }
};

export const incrAction = () => ({ type: INCR });
export const decrAction = () => ({ type: DECR });
export const setAction = (payload) => ({ type: SET, payload });

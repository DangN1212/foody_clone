import { ORDER } from '../constant';

const defaultOrder = {
    value: 0
};

export default function counterReducer(state = defaultOrder, action) {
    switch (action.type) {
        case ORDER.increase:
            return { ...state, value: state.value + 1 };
        case ORDER.decrease:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
}

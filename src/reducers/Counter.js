export default function Counter(state = 0, action) {
    console.log("Inside reducerrrrr", action);
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return state + 1;
        case 'DECREMENT_COUNT':
            return (state >= 1) ? state - 1 : state;
        default:
            return state;
    }
}


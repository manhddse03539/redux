const intinialState = {
    list: []
};
const listReducer = (state = intinialState, action) => {
    switch (action.type) {
        case 'SET_DATA': {
            return {
                list: action.payload
            };
        }
        default:
            return state;
    }
}

export default listReducer;
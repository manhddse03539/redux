const { createStore } = window.Redux;
// intinial state
let stateIntinial = 3;
const couter = document.querySelector('#counter');
const renderCounter = num => couter.innerHTML = num;
renderCounter(stateIntinial);
// reducer
const countReducer = (state = stateIntinial, action) => {
    switch (action.type) {
        case 'INC':
            stateIntinial += 1;
            return stateIntinial;
        case 'DEC':
            stateIntinial -= 1;
            return stateIntinial;
        default:
            return state;
    }
}
const store = createStore(countReducer);
// dispath
const incrementElement = document.querySelector('#increment');
const decrementElement = document.querySelector('#decrement');
const handleIncrement = (e) => {
    const action = {
        type: 'INC'
    }
    store.dispatch(action);
}
const handleDecrement = (e) => {
    const action = {
        type: 'DEC'
    }
    store.dispatch(action);
}
incrementElement.addEventListener('click', handleIncrement);
decrementElement.addEventListener('click', handleDecrement);
// subscribe to update view
store.subscribe(() => {
    const newValue = store.getState();
    renderCounter(newValue);
    if (newValue === 0) {
        decrementElement.setAttribute("disabled", true);
    } else if (newValue === 5) {
        incrementElement.setAttribute("disabled", true);
    } else {
        decrementElement.disabled = false;
        incrementElement.disabled = false;
    }
});
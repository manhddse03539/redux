const { createStore } = window.Redux;
// intinial state
const intiniaState = JSON.parse(localStorage.getItem('hobby_list')) || [];
// reducer
const hobbyReducer = (state = intiniaState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state];
            newList.push(action.payload);
            return newList;
        }
        default:
            return state;
    }
}
// store
const store = createStore(hobbyReducer);

// handle to render hobby list
const renderHobbyList = hobbyList => {
    if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;
    // query ul list
    const ulElement = document.querySelector('#hobbyList');
    if (!ulElement) return;
    // reset previous content of ul
    ulElement.innerHTML = '';
    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;
        ulElement.appendChild(liElement);
    }
}
// render intinial hobby list
const intinialHobbyList = store.getState();
renderHobbyList(intinialHobbyList);

// handle form submit to add hobby
const hobbyFormElement = document.querySelector('#hobbyFormID');
if (hobbyFormElement) {
    const handleSubmitForm = e => {
        e.preventDefault();
        const hobbyTextElement = document.querySelector('#hobbyTextID');
        if (!hobbyTextElement) return;
        const action = {
            type: 'ADD_HOBBY',
            payload: hobbyTextElement.value
        }
        store.dispatch(action);
        hobbyFormElement.reset();
    }
    hobbyFormElement.addEventListener('submit', handleSubmitForm);
}

// render new list after add new hobby
store.subscribe(() => {
    const newHobbyList = store.getState();
    renderHobbyList(newHobbyList);
    localStorage.setItem('hobby_list', JSON.stringify(newHobbyList));
})
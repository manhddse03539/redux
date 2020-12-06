import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList';

// random id of hobby
const randomHobbyId = () => {
    return 1000 + Math.trunc((Math.random() * 9000));
}
const HomePage = (props) => {
    // get selector from reducer
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    // random id of hobby
    const newId = randomHobbyId();
    const disPatch = useDispatch();
    // handle action and dispatch to add new hobby
    const handleAddHobby = () => {
        const newHobby = {
            id: newId,
            title: `Hobby${newId}`
        }
        const action = addNewHobby(newHobby);
        disPatch(action);
    }
    // handle action and dispatch to active focus hobby
    const handleOnHobbyClick = hobby => {
        const action = setActiveHobby(hobby);
        disPatch(action);
    }
    return (
        <div>
            <button onClick={handleAddHobby}>Add new hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                onHobbyClick={handleOnHobbyClick}
                activeId={activeId}
            />
        </div>
    );
}

export default HomePage;
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDatas } from '../actions/action';

const URL = 'http://localhost:9081/list';
const fetchData = (url, callback) => {
    fetch(url)
        .then(response => {
            if (response.status !== 200) {
                console.log(`Error fetching recipes: ${response.status}`);
            } else {
                response.json().then(callback)
            }
        })
        .catch(err => console.log(err));
}
const List = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        fetchData(URL, data => {
            const action = setDatas(data);
            dispatch(action);
        });
    }, [dispatch])
    const list = useSelector(state => state.list.list);
    return (
        <ul>
            {list.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
}

export default List;
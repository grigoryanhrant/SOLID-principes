import React, {useEffect, useReducer, useState} from "react";

const initialState = {
    isLoading: true
}

// COMPLEX STATE MANAGEMENT

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {isLoading: true};

        case 'FINISHED':
            return {isLoading: false};

        default:
            return state;
    }
}

export const SingleResponsibilityPrinciple = () => {
    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [state, dispatch] = useReducer(reducer, initialState);

    const showDetails = userId => {
        const user = filteredUsers.find(user => user.id === userId);
        console.log(user.contact)
    }

    // REMOTE DATA FETCHING

    useEffect(() => {
        dispatch({type: 'LOADING'})
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch({type: 'FINISHED'})
                setUsers(json)
            })
    }, [])

    // PROCESSING DATA

    useEffect(() => {
        const filteredUsers = users.map(user => {
            return {
                id: user.id,
                name: user.name,
                contact: `${user.phone}, ${user.email}`
            };
        });

        setFilteredUsers(filteredUsers)
    }, [users])

    // COMPLEX UI RENDERING

    return <>
        <div>Users List</div>
        <div>Loading state: {state.isLoading ? 'Loading' : 'Success'}</div>
        {users.map(user => {
            return <div key={user.id} onClick={() => showDetails(user.id)}>
                <div>{user.name}</div>
                <div>{user.email}</div>
            </div>
        })}
    </>
}

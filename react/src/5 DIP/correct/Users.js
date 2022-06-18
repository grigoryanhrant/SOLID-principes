import React from "react";
import {useFetch} from './useFetch'

const REMOTE_URL = 'https://jsonplaceholder.typicode.com/users'

export const Users = () => {

    const users = useFetch(REMOTE_URL)

    return <>
        <div> Users List</div>
        {users.map(user => <div>{user.name}</div>)}
    </>
}

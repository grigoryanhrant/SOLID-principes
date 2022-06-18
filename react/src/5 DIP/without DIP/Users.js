import React, {useEffect, useState} from "react";

const REMOTE_URL = 'https://jsonplaceholder.typicode.com/users'

export const Users = () => {

    const [users , setUsers] = useState([])

    useEffect(() => {

        fetch(URL)
            .then(response => response.json())
            .then(json => setUsers(json))

    },[])

    return <>
        <div> Users List</div>
        {users.map(user => <div>{user.name}</div>)}
    </>
}

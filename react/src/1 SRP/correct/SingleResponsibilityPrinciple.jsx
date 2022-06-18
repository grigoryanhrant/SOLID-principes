import React from "react";
import {useGetRemoteData} from "./useGetRemoteData";
import {UserDetails} from "./UserDetails";

export const Users = () => {
    const {filteredUsers , isLoading} = useGetRemoteData()

    return <>
        <div> Users List</div>
        <div> Loading state: {isLoading? 'Loading': 'Success'}</div>
        {filteredUsers.map(user => <UserDetails user={user}/>)}
    </>
}

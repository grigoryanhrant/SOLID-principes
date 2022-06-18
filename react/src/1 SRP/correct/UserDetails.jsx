export const UserDetails = (user) => {

    const showDetails = (user) => {
        alert(user.contact)
    }

    return <div key={user.id} onClick={() => showDetails(user)}>
        <div>{user.name}</div>
        <div>{user.email}</div>
    </div>
}

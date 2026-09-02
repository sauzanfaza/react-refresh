import { useState, useEffect } from 'react'

export default function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
        setUsers(data)
        setIsLoading(false)
    })
        .catch((error) => {
            setError(error)
            setIsLoading(false)
        })
    }, [])
    console.log(users)

    return(
        <>
        {isLoading && <p>Loading...</p>}
        {error && <p>Something Went Wrong...</p>}
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
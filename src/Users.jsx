import { useState, useEffect } from 'react'

export default function Users() {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showUsers, setShowUsers] = useState(true)

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

        {/* show user button */}
        <div className='flex justify-center'>
            <button 
            onClick={() => setShowUsers((prev) => !prev)}
            className='p-4 bg-slate-200 hover:bg-slate-400 border border-slate-400 rounded-lg shadow-md'>
                {showUsers ? "Hide Users" : "Show Users"}
            </button>
        </div>

        <div className='p-4 justify-center mt-4'>
            <div className='grid grid-cols-3 p-2 bg-slate-200 border border-slate-400 shadow-md rounded-lg'>
                <div className='text-center'>ID</div>
                <div className='text-center'>Name</div>
                <div className='text-center'>Email</div>
            </div>
            {showUsers && (
                users.map((user) => (
                <div 
                className='grid grid-cols-3 p-2 my-4 bg-slate-200 border border-slate-400 shadow-md rounded-lg'
                key={user.id}>
                    <div className='text-center'>{user.id}</div>
                    <div className='text-center'>{user.name}</div>
                    <div className='text-center'>{user.email}</div>
                </div>
            ))
            )}
        </div>
        </>
    )
}
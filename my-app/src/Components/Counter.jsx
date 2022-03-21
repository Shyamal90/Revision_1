import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Counter.css'

function Counter() {
    const store = useSelector((state) => state);
    console.log("Inner Store ", store)
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        let data = Object.keys(store).map((key) => {
            return store[key]
        })

        setUserData(data);
        console.log("UserData ", userData)
        console.log("Inner Store ", store)
    }, [store])



    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE NO</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Counter

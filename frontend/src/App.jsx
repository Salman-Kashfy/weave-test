import {useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

const baseUrl = 'http://localhost:3000'
const routes = {
    users: '/api/users',
    search: '/api/search'
}

function App() {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState({})

    const fetchUsers = () => {
        axios.get(baseUrl+routes.users).then((res) => {
            setUsers(res.data)
        })
    }

    useEffect(() => {

        fetchUsers()
    },[])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Company</td>
                    </tr>
                </thead>
                <tbody>
                {users.map((e) => {
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.company.name}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    )
}

export default App

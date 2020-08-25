import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {changeUsername} from '../redux/reducer'

const HookComponent = (props) => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const {user, movies} = useSelector((r) => r)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("component mounted")
    }, [])
    useEffect(() => {
            console.log(user.username)
            // axios.get('/api/movies').then((results) => {
            //     setMovies(results.data)
            // })
    }, [user.username])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter name"
            />
            <h1>{user.username}</h1>
            <button onClick = {() => dispatch(changeUsername(name))}>Change Username</button>
        </div>
    )
}


export default HookComponent
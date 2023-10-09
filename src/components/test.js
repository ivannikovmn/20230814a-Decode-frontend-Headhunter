'use client'
import { useState, useEffect, useRef } from "react"
import TestUser from "./testUser"
export default function Test(){
    // const name = "Mikhail"
    // let counter = 10
    // const [counter, setCounter] = useState(10);

    // console.log("component was rendered", counter);

    // const plusFunc = () => {
    //     // console.log("plus")
    //     // counter++;
    //     // setCounter(20)
    //     setCounter(counter + 1)
    //     console.log("plus", counter)
    // }

    // const minusFunc = () => {
    //     // console.log("minus")
    //     // counter--;
    //     // setCounter(5)
    //     setCounter(counter - 1)
    //     console.log("minus", counter)
    // }
    // const users = [{
    //     name: "Askar",
    //     id: 1
    // }, {
    //     name: "Aruzhan",
    //     id: 2
    // }, {
    //     name: "Igor",
    //     id: 3
    // },]

    const someRef = useRef()
    const [users, setUsers] = useState([{
        name: "Askar",
        id: 1
    }, {
        name: "Aruzhan",
        id: 2
    }, {
        name: "Igor",
        id: 3
    },])

    // const logId = (id) => {
    //     console.log(id);
    // }
    const deleteUser = (id) => {
        for (let i = 0; i < users.length; i++) {
            if(users[i].id === id) {
                let temp = [...users]
                temp.splice(i, 1)
                setUsers(temp)
                return setUsers(temp)
            }
        }
    }

    const test = {}

    useEffect(() => {
        console.log("didMount - cрабатывает один раз после первого рендера");

        return () => {
            console.log("componentWillUnMount - срабатывает перед закрытием компонента");
        }
    }, [])

    // useEffect(() => {
    //     console.log("didMount - cрабатывает один раз после первого рендера");
    // }, [users, test])
    useEffect(() => {
        console.log("useEffect когда меняется Users");
        console.log(someRef);
    }, [users])

    console.log("Render");
    return (<div ref={someRef}>
        {/* <h1>My test Component {name} </h1>
        <p>My test parag ...</p>
        <a>test link</a>

        <p>Counter: {counter} </p>

        <button onClick={minusFunc}>Minus</button>
        <button onClick={plusFunc}>Plus</button> */}

        {/* {users.map(item => (<div onClick={logId(item.id)}>{item.name}</div>))} */}
        {/* {users.map(item => (<div onClick={logId}>{item.name}</div>))} */}
        {/* {users.map(item => (<div onClick={() => logId(item.id)}>{item.name}</div>))} */}
        {users.map(item => (<TestUser key={item.id} user={item} deleteUser={deleteUser}/>))}
    </div>)
}
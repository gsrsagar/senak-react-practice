import React, { useEffect, useState } from "react"
import img from './assets/Day 28.png';



export function Counter() {

    const [count, setCount] = useState(0);
    const [isLoggedin, setLoggedIn] = useState(false);
    //onclick
    //onClick
    // life cycle hook / functional

    useEffect(() => {

    }, [])
    return (
        <>
            <User />
            {user1}
            {nested}
            {imgSRC}
            {para}
            {renderUsers()}
            {code}
            {expressionExample1({ name: "Sagar" })}
            {isLoggedin && <div>Is loggedin</div>}<br />
            <button onClick={() => setCount(per => per + 1)}>Update Count</button>
            <div>Hello I am coutning! <b>count:{count}</b></div>
        </>
    )
}


function User() {
    return <h5 className="h5-direct1">Hi this is User "Sagar Reddy"</h5>
}

const user1 = React.createElement(
    "h5",
    { className: "h5-element" },
    "Hello This is GSR Sagar using React.createElement"
);

const nested = React.createElement(
    "div",
    { className: "nested-exmaple" },
    React.createElement("p", null, "Thisis First Para"),
    React.createElement("p", null, "Thisis Second Para"),
    React.createElement("p", null, "Thisis Third Para"),
    React.createElement("p", null, "Thisis Fourth Para"),
    React.createElement("p", null, "Thisis Fifth Para"),
)

const expressionExample = (user) => <h1>This is Example User {user.name}</h1>
function expressionExample1(user) {
    return <h1>This is Example User {user.name}</h1>
}


function renderUsers() {
    const users = [
        { name: "Sagar", age: 28 },
        { name: "Supriya", age: 27 },
        { name: "Sunil", age: 27 },
        { name: "Sampoorna", age: 27 },
        { name: "Suresh", age: 30 },
    ]

    return <ul>
        {users.map(x => {
            return <li>{x.name}+" "+{x.age}</li>
        })}
    </ul>

}

const imgStyles = {width: '280px',height: '150px'};

const imgSRC = <img style={imgStyles} src={img} />
const para = <p>This is Para</p>;


const scriptMalicious = `<script>This is Malicious Code</script>`;
const code = <p>{scriptMalicious}</p>
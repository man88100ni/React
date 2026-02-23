import React from 'react';
let obj = {
    name: "Manish Soni",
    age: 30,
    canDrive: "Yes"
}
const haveCar = false;

function Greet(prop){
    const updatedClassName =  prop.class + " Science";
    return (
        <>
            <h1>My Name : {prop.name}</h1>
            <h1>Age : {prop.age}</h1>

            <h1>{prop.children}</h1>

            {/* <h1>Can Drive : {obj.canDrive}</h1>
            <h2>Car : { haveCar ? "WegonR" : "Not having car" }</h2>
            <h1>Name : {prop.name}</h1>
            <h1>Age: { prop.age }</h1>
            <h1>Class: { prop.class }</h1>
            <h1>{ updatedClassName }</h1> */}
        </>
    )
}
export default Greet;
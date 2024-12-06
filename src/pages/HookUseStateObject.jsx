import React, { useState } from 'react';

const HookUseStateObject = () => {

    const[myObject, setMyObject]=useState({
        key1: "Value 1",
        key2: "Value 2",
        key3: "Value 3",
    })

    // To change full object
    // const change = () =>{
    //     setMyObject({
    //         key1: "New Value 1",
    //         key2: "New Value 2",
    //         key3: "Naw Value 3",
    //     })
    // }

    // To change specific data on object
    const change = () =>{
        setMyObject(
            previousObject=>({
                ...previousObject,
                key3: "New value for key 3",
                key2: "New value for key 2"
            })
        )
    }


    return (
        <div>
            <h1>{myObject.key1}</h1>
            <h1>{myObject.key2}</h1>
            <h1>{myObject.key3}</h1>
            <button onClick={change}>Change</button>
        </div>
    );
};

export default HookUseStateObject;
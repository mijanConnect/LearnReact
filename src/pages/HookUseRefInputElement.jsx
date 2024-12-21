import React, { useRef } from 'react';

const HookUseRefInputElement = () => {

    let firstName, lastName=useRef();

    const change = () =>{
        let fName = firstName.value;
        let lName = lastName.value;

        alert(fName + " " + lName);
    }

    return (
        <div>
            <input ref={(a)=>firstName=a} type="text" placeholder='First Name' /><br />
            <input ref={(a)=>lastName=a} type="text" placeholder='Last Name' /><br />

            <button onClick={change}>Click</button>
        </div>
    );
};

export default HookUseRefInputElement;
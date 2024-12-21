import React, { useRef } from 'react';

const HookUseRefCSS = () => {

    let myHeadline=useRef();

    const change = () =>{
        myHeadline.current.classList.remove('text-success');
        myHeadline.current.classList.add('text-danger');
    }

    return (
        <div>
            <h1 className='text-success' ref={myHeadline}>This is Headline.</h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default HookUseRefCSS;
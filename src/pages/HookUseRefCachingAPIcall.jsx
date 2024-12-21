import React, { useRef } from 'react';

const HookUseRefCachingAPIcall = () => {


    // API called & Stored/cache in this reference
    let APIData = useRef(null);
    let myPTag = useRef();

    const ferchData = async () => {
       const response = await fetch("https://dummyjson.com/products");
       APIData.current = await response.json();
    }

    const showData = () => {
        myPTag.current.innerHTML = JSON.stringify(APIData.current);
    }


    return (
        <div>
            <p ref={myPTag}></p>
            <button onClick={ferchData}>Call API</button>
            <button onClick={showData}>Show Data</button>
        </div>
    );
};

export default HookUseRefCachingAPIcall;
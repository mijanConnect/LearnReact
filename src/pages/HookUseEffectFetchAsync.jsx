import React, { useEffect, useState } from 'react';

const HookUseEffectFetchAsync = () => {

    let [data,setData]=useState();

    useEffect(()=>{
        (async()=>{
            let response = await fetch('https://dummyjson.com/carts')
            let json= await response.json()
            setData(json)
        })()
    },[])

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
};

export default HookUseEffectFetchAsync;
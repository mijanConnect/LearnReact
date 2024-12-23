import React from 'react';
import { useEffect } from 'react';

const HookUseEffect = () => {

    useEffect(()=>{
        console.log('Hello Effect.');
    },[1,40,5,10])

    return (
        <div>
            
        </div>
    );
};

export default HookUseEffect;
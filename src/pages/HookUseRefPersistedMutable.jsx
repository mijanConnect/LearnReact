import React, { useRef } from 'react';

const HookUseRefPersistedMutable = () => {

    let number = useRef(0);

    const change = () =>
        number.current = number.current+1;
        console.log(number.current);

    return (
        <div>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default HookUseRefPersistedMutable;
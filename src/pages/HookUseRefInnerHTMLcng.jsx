import { useRef } from "react";

const HookUseRefInnerHTMLcng = () => {

    // Normal DOM
    // let myHeadline = document.getElementById('myHeadline');

    // Using React hook
    let myHeadline = useRef();

    const change = () =>{
        // myHeadline.current.innerText="Hello useRef";
        // myHeadline.current.innerHTML = "<ul><li>A</li><li>B</li></ul>";

        // If we don't want to use CURRENT property
        myHeadline.innerHTML = "<ul><li>A</li><li>B</li></ul>";
    }

    return (
        <div>
            {/* Normal DOM */}
            {/* <h1 id="muHeadline"></h1> */}

            {/* Using React hook & CURRENT properties */}
            {/* <h1 ref={myHeadline}></h1>
            <button onClick={change}>Click</button> */}

            {/* Using React hook & don't want to use CURRENT properties */}
            <h1 ref={(h1)=>myHeadline=h1}></h1>
            <button onClick={change}>Click</button>
        </div>
    );
};

export default HookUseRefInnerHTMLcng;
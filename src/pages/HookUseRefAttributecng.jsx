import { useRef } from "react";

const HookUseRefAttributecng = () => {

    let myImg = useRef();

    const change = () =>{
        myImg.current.src="https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg";
        myImg.current.setAttribute('height','100px');
        myImg.current.setAttribute('width','100px');
    }

    return (
        <div>
            <img ref={myImg} src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg" alt="Image" />
            <button onClick={change}>Click</button>
        </div>
    );
};

export default HookUseRefAttributecng;
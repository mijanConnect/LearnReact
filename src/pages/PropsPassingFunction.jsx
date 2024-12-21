import HeroFunction from "../component/HeroFunction";

const PropsPassingFunction = () => {

    const BtnClick=()=>{
        alert("Say Hello!");
    }
    return (
        <div>
            <HeroFunction ChildBtnClick={BtnClick}/>
        </div>
    );
};

export default PropsPassingFunction;
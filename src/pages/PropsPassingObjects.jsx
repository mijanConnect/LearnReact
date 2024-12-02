import HeroObjects from "../component/HeroObjects";

const PropsPassingObjects = () => {

    const ItemObject={
        name:'Mijanur Rahman',
        age:28,
        city:'Dhaka'
    }

    return (
        <div>
            <HeroObjects item={ItemObject}/>
        </div>
    );
};

export default PropsPassingObjects;
const HeroObjects = (props) => {

    return (
        <div>
            {/* PropsPassingObjects */}
            <ul>
                <li>Name: {props.item['name']}</li>
                <li>Age: {props.item['age']}</li>
                <li>City: {props.item['city']}</li>
            </ul>
        </div>
    );
};

export default HeroObjects;
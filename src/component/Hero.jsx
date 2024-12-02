const Hero = (props) => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcgNi23XIu0JLwZMfEJwE9eBw_5KhqtPV3g&s" alt="" />
            {/* PropsPassingData */}
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Hero;
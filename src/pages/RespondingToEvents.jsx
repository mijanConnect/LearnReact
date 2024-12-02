const RespondingToEvents = () => {
  
    function Demo(){
        alert('Click');
    }

    return (
        <div>
            {/* This is executed instand when loading the component */}
            {/* <button onClick={alert('Click')}>Submit</button> */}

            {/* This is executed when click on the button */}
            <button onClick={Demo}>Submit</button>
        </div>
    );
};

export default RespondingToEvents;
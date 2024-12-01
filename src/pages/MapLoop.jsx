const MapLoop = () => {
    const city = ['Dhaka', 'London', 'Delhi', 'Kolkata'];
    return (
        <div>
            <ol>
                {
                    city.map((item,i)=>{
                        return <li key={i.toString}>{item}</li>
                    })
                }
            </ol>
        </div>
    );
};

export default MapLoop;
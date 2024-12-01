const IfElse = () => {

    let marks = 81;
    return (
        <div>
            {(() =>{
              if(marks>=80 && marks<100){
                return <h1>Excellent</h1>
              }
              else if(marks>=70 && marks<80){
                return <h1>Good</h1>
              }
            })()}
        </div>
    );
};

export default IfElse;
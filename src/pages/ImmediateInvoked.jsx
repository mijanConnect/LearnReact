const ImmediateInvoked = () => {
    let status = true;

    return (
        <div>
            <h1>Login Status</h1>
            {
                (()=>{
                    if(status==true){
                        return <button>Logout Btn</button>
                    }
                    else{
                        return <button>Login Btn</button>
                    }
                })()
            }
        </div>
    ); 
};

export default ImmediateInvoked;
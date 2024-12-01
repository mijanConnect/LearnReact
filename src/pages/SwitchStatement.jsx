const SwitchStatement = () => {
    const status = true;

    switch(status){
        case true:
            return <button>Logout Btn</button>
        case false:
            return <button>Login Btn</button>
        default:
        return null
    }
};

export default SwitchStatement;
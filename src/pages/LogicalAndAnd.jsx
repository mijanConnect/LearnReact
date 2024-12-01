const LogicalAndAnd = () => {
    let status = true;

    return (
        <div>
            <h1>Login Status</h1>
            {
                status && <button>Logout Btn</button>
            }
        </div>
    );
};

export default LogicalAndAnd;
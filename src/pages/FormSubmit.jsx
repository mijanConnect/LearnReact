const FormSubmit = () => {

    // To stop reload the page using this function
    const PostFormData=(event)=>{
        event.preventDefault();
        alert('From submitted!');
    }

    return (
        <div>
            <form onSubmit={PostFormData}>
                <input placeholder="Name" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormSubmit;
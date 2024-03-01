import React, {Fragment, useState} from "react";

const InputItem = () => {

    const [type, setType] = useState("");

    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
            const body = {type};
            const response = await fetch(
                "http://localhost:5000/items",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json" },
                    body:   JSON.stringify(body)
                });

            console.log(response);
           
            window.location ="/";
        } catch (error) {
            console.error(error.message);
        }
    }

    return(
        <Fragment>
            <h1>Input Item</h1>
            <form onSubmit={onSubmitForm}>                                  
                <input 
                    type="text" 
                    value={type} 
                    onChange={e => setType (e.target.value)} />
                <button>Add</button> {/* Adding for puting in the database */}
            </form>
        </Fragment>
        
    );
}

export default InputItem;
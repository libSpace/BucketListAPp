// Import necessary components from 'react'
import React, { Fragment, useState } from "react";
//  react icons
import { IoMdAddCircle } from "react-icons/io"; {/* Ann add icon*/}

// Functional component for InputItem
const InputItem = () => {
    
    // State hooks to manage form values
    const [item_name, setItem_name] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("0.00");

    // Function to handle form submission
    const onSubmitForm = async e => {
        e.preventDefault();  // Prevent form default behavior
        try {
            // Prepare request body with form values
            const body = { item_name, description, quantity, price };

            // Send POST request to server
            const response = await fetch(
                "http://localhost:5000/items",
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );

            console.log(response);  // Log the response

            window.location = "/";  // Redirect to homepage
        } catch (error) {
            console.error("Error submitting form:", error.message);  // Log any errors
        }
    }

    return (
        <Fragment>
            <h1>Input Item</h1>
            {/* Form for submitting item */}
            {/* <!-- Button to Open the Modal --> */}
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  <IoMdAddCircle />
  </button>

  {/* <!-- The Modal --> */}
  <div className="modal" id="myModal">
    <div className="modal-dialog">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">Add an item</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div className="modal-body">
           <form onSubmit={onSubmitForm}>
                {/* Input fields for item details */}
                <div className="modal-body">
                    <input 
                        type='text' 
                        className='form-control' 
                        // value={item_name} 
                        onChange={e =>
                            setItem_name(e.target.value)} />
                </div>
                {/* <input 
                    type="text" 
                    value={item_name} 
                    onChange={e => setItem_name(e.target.value)} 
                /> */}
                <div className="modal-body">
                    <input 
                        type="text" 
                        className='form-control'
                        value={description} 
                        onChange={e => setDescription(e.target.value)} 
                    />
                </div>
                <div className="modal-body">
                    <input 
                        type="number" 
                        className='form-control'
                        value={quantity} 
                        onChange={e => setQuantity(e.target.value)} 
                    />
                </div>
                <div className="modal-body">
                    <input 
                        type="number" 
                        className='form-control'
                        value={price} 
                        onChange={e => setPrice(e.target.value)} 
                    />
                </div>
                {/* Button for adding item to the database */}
                
                <button class="btn btn-success">Add</button> 
            
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        
            </form>
        </div>
        
        {/* <!-- Modal footer --> */}
        {/* <div className="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div> */}
        
      </div>
    </div>
    </div>
        </Fragment>
    );
}

// Export InputItem component as default
export default InputItem;

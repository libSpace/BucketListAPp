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
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <h4 class="modal-title">Add an item</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
           <form onSubmit={onSubmitForm}>
                {/* Input fields for item details */}
                <input 
                    type="text" 
                    value={item_name} 
                    onChange={e => setItem_name(e.target.value)} 
                />
                <input 
                    type="text" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                />
                <input 
                    type="number" 
                    value={quantity} 
                    onChange={e => setQuantity(e.target.value)} 
                />
                <input 
                    type="number" 
                    value={price} 
                    onChange={e => setPrice(e.target.value)} 
                />
                {/* Button for adding item to the database */}
                <button>Add</button> 
            </form>
        </div>
        
        {/* <!-- Modal footer --> */}
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
    </div>
        </Fragment>
    );
}

// Export InputItem component as default
export default InputItem;

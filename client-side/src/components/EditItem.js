import React, {Fragment, useState} from 'react';

const EditItem = ({item}) => {
    const [item_name, setItem_name] = useState(item.item_name);
    const [description, setDescription] = useState(item.description);
    const [quantity, setQuantity] = useState(item.quantity);
    const [price, setPrice] = useState(item.price);

    //Edit type function
    const updateType = async(e) => {
        e.preventDefault();
        try {
            const body = { item_name, description, quantity, price };
            const response = await fetch(`http://localhost:5000/items/${item.groc_id}`,
            {
                method: "PUT",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify(body)
            });

            console.log(response);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }
    }
    // revert to the original state if not updated by the client
    const handleItemClick = () => {
        setItem_name(item.item_name);
        setDescription(item.description);
        setQuantity(item.quantity);
        setPrice(item.price);
    };

    return (
       <Fragment>
        {/* <!-- Button to Open the Modal --> */}
    <button 
        type="button"  
        class="btn btn-primary" 
        data-toggle="modal" 
        data-target={`#id${item.groc_id}`}>
    Edit
    </button>

    {/* <!-- The Modal --> */}
    <div 
        class="modal" 
        id={`id${item.groc_id}`}
        onClick={() => setItem_name(item.item_name)}>
        <div className="modal-dialog">
            <div className="modal-content">

                {/* <!-- Modal Header --> */}
                <div className="modal-header">
                    <h4 className="modal-title">Edit</h4>
                    <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal"
                        onClick={handleItemClick} >&times;</button>
                </div>

                {/* <!-- Modal body --> */}
                <div className="modal-body">
                    <input 
                        type='text' 
                        className='form-control' 
                        value={item_name} 
                        onChange={e =>
                            setItem_name(e.target.value)} />
                </div>
                <div className="modal-body">
                    <input 
                        type='text' 
                        className='form-control' 
                        value={description} 
                        onChange={e =>
                            setDescription(e.target.value)} />
                </div>
                <div className="modal-body">
                    <input 
                        type='number' 
                        className='form-control' 
                        value={quantity} 
                        onChange={e =>
                            setQuantity(e.target.value)} />
                </div>
                <div className="modal-body">
                    <input 
                        type='number' 
                        className='form-control' 
                        value={price} 
                        onChange={e =>
                            setPrice(e.target.value)} />
                </div>

                {/* <!-- Modal footer --> */}
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-warning" 
                        data-dismiss="modal"
                        onClick={e => updateType(e)}>Edit</button>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        data-dismiss="modal" 
                        onClick={handleItemClick}>Close</button>
                </div>

            </div>
        </div>
    </div>
       </Fragment>
    )
}
export default EditItem;
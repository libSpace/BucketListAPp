import React, {Fragment, useState} from 'react';

const EditItem = ({item}) => {
    const [type, setType] = useState(item.type);

    //Edit type function
    const updateType = async(e) => {
        e.preventDefault();
        try {
            const body = {type};
            const response = await fetch(`http://localhost:5000/items/${item.item_id}`,
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

    return (
       <Fragment>
        {/* <!-- Button to Open the Modal --> */}
    <button 
        type="button"  
        class="btn btn-primary" 
        data-toggle="modal" 
        data-target={`#id${item.item_id}`}>
    Edit
    </button>

    {/* <!-- The Modal --> */}
    <div 
        class="modal" 
        id={`id${item.item_id}`}
        onClick={() => setType(item.type)}>
        <div class="modal-dialog">
            <div class="modal-content">

                {/* <!-- Modal Header --> */}
                <div class="modal-header">
                    <h4 class="modal-title">Edit</h4>
                    <button 
                        type="button" 
                        class="close" 
                        data-dismiss="modal"
                        onClick={() => setType(item.type)} >&times;</button>
                </div>

                {/* <!-- Modal body --> */}
                <div class="modal-body">
                    <input 
                        type='text' 
                        className='form-control' 
                        value={type} 
                        onChange={e =>
                                setType(e.target.value)} />
                </div>

                {/* <!-- Modal footer --> */}
                <div class="modal-footer">
                    <button 
                        type="button" 
                        class="btn btn-warning" 
                        data-dismiss="modal"
                        onClick={e => updateType(e)}>Edit</button>
                    <button 
                        type="button" 
                        class="btn btn-danger" 
                        data-dismiss="modal" 
                        onClick={() => setType(item.type)}>Close</button>
                </div>

            </div>
        </div>
    </div>
       </Fragment>
    )
}
export default EditItem;
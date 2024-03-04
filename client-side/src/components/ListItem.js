import React, {Fragment, useEffect, useState} from 'react';
import EditItem from './EditItem'

const ListItem = () =>{

    const [items, setItems] = useState([]);
    const [item_name, setItem_name] = useState([]);
    const [description, setDescription] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [price, setPrice] = useState([]);

// Delete  an item function
    const deleteItemFunc = async id =>{
        try {
            await fetch(`http://localhost:5000/items/${id}`,{
                method : "DELETE"
            });

            setItems(items.filter(item => item.groc_id !== id))
            
            // console.log(deleteItem);
            // window.location ="/";
            // const jsonData = await response.json();
        } catch (error) {
            console.error(error.message);
        }
    }

    const getItems = async () =>{
        try {
            
            const response = await fetch("http://localhost:5000/items");
            const jsonData = await response.json();


            setItems(jsonData);
            console.log(jsonData);

        } catch (error) {
            console.error(error.message );
        }
    }

    useEffect(() =>{
        getItems();
    },[]);

    console.log(items)

    return(
        <Fragment>
            <h1>List Items</h1>
            <table class="table">
    <thead>
      <tr>
        <th>Type</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr> */}
      {items.map(item =>(
        <tr key={item.groc_id}>
            <td>
                <h5>{item.item_name}</h5>
                <p>
                    <small>{item.quantity} x {item.description}, R{item.price}</small>
                </p>
            </td>
            <td>
                <EditItem item ={ item}  />
            </td>
            <td>
                <button onClick={() => deleteItemFunc(item.groc_id)}>
                    Delete
                </button>
            </td>
        </tr>
      ))}
      
      
    </tbody>
  </table>
        </Fragment>
    );
}

export default ListItem;
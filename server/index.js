const express = require("express");// Importing the 'express' helper library, which makes it easier to handle web server-related tasks.
const app = express();// Setting up the Express application to create a web server.
const cors = require("cors");// Importing the 'CORS' helper library, which helps with cross-origin resource sharing.
const pool = require("./db");


// Middlewre
app.use(cors());// Using CORS middleware to enable cross-origin requests, allowing the server to be accessed from different origins.
app.use(express.json());// Using middleware to enable the server to parse incoming JSON data from requests.

// Routes
//#################################//
//We use queries
//create a list
app.post("/items", async(req, res) =>{
    //async provide an await
    try {
        const { item_name, description, quantity, price } = req.body;
        const newItem = await pool.query(
            "INSERT INTO grocery_list(item_name, description, quantity, price) VALUES($1, $2, $3, $4) RETURNING *",
            [item_name, description, quantity, price]
        );
        
        res.json(newItem.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});



//get all items
app.get("/items", async(req, res) =>{
    try {
            const allItems = await pool.query("SELECT * FROM grocery_list");
            res.json(allItems.rows);
    } catch (error) {
        console.error(error.message);
    }
})




//get an item
app.get("/items/:id", async(req, res) =>{
    // Try to fetch an item from the grocery_list table based on provided groc_id
    try {
        // Extract groc_id from request parameters
        const { id } = req.params;
    
        // Query the database to select all columns for the specified groc_id
        const item = await pool.query("SELECT * FROM grocery_list WHERE groc_id = $1", [id]);
    
        // Respond with the first row of the result, if any
        res.json(item.rows[0]);
    } catch (error) {
        // Log any errors that occur during the database query
        console.error(error.message);
    }
})

// Update item route definition
app.put("/items/:id", async (req, res) => {
    try {
        // Extract ID from request parameters
        const { id } = req.params;

        // Extract item details from request body
        const { item_name, description, quantity, price } = req.body;

        // Execute update query in database
        const updateItem = await pool.query(
            "UPDATE grocery_list SET item_name = $1, description = $2, quantity = $3, price = $4 WHERE groc_id = $5 RETURNING *",
            [item_name, description, quantity, price, id]
        );

        // Check if item was found for update
        if (updateItem.rows.length === 0) {
            return res.status(404).json("Item not found");
        }

        // Respond with success message
        res.json("Item was updated");
    } catch (error) {
        // Log and respond to errors
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});



// Delete item route definition
app.delete("/items/:id", async (req, res) => {
    try {
        // Extract ID from request parameters
        const { id } = req.params;

        // Execute database deletion query
        await pool.query(
            "DELETE FROM grocery_list WHERE groc_id = $1",
            [id]
        );

        // Respond with deletion success message
        res.json("Item was deleted");
    } catch (error) {
        // Log and respond to errors
        console.error(error.message);
    }
});





// Starting the server and making it listen on port 5000.
app.listen(5000, () => {
    // Logging a message to the console when the server has successfully started.
    console.log("Server has started on port 5000");
});

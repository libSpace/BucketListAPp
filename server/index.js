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
        const {type} = req.body;
        const newItem = await pool.query("INSERT INTO item(type) VALUES($1) RETURNING * ",
        [type]
        );
        
        res.json(newItem.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});



//get all items
app.get("/items", async(req, res) =>{
    try {
            const allItems = await pool.query("SELECT * FROM item");
            res.json(allItems.rows);
    } catch (error) {
        console.error(error.message);
    }
})




//gert an item
app.get("/items/:id", async(req, res) =>{
    try {
        const {id} = req.params;
        const item = await pool.query("SELECT * FROM item WHERE item_id =$1", [id]);

        res.json(item.rows[0]);
    } catch (error) {
        console.error(error.message); 
    }
})

//update a item
app.put("/items/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {type} = req.body;
        const updateItem = await pool.query(
            "UPDATE item SET type = $1 WHERE item_id = $2", 
            [type , id]
            );

        res.json("Item was updated");

    } catch (error) {
        console.error(error.message);
    }
});

//delete a item
app.delete("/items/:id", async(req, res)=>{
    try {
        const {id}  = req.params;
        // const {type} = req.body;
        const deleteItem = await pool.query(
            "DELETE FROM item WHERE item_id = $1",
            [id]
        );

        res.json("item was deletef");
    } catch (error) {
        console.error(error.message);
    }
})




// Starting the server and making it listen on port 5000.
app.listen(5000, () => {
    // Logging a message to the console when the server has successfully started.
    console.log("Server has started on port 5000");
});

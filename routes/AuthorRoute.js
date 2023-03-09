const express = require('express')
const Author = require('../models/Author')
const AuthorRouter = express.Router();

// CREATE AUTHOR

AuthorRouter.post("/author", async (req, res) =>{
    try {
         const { name, surname, age }= req.body 
        /* let author = new Author(req.body)
        console.log(req.body)
        let name = req.body.name
        let surname = req.body.surname
        let age = req.body.age */
        
        if(!name || !surname || !age) {
            return res.status(400).send({
                success: false, 
                message: "Il manque des données"
            });
        }
        let author = new Author({ name, surname, age,}) 
        await author.save();
        return res.status(200).send({
            success: true,
            message: "L'auteur a bien était crée",
            // Cette ligne permet d'afficher le model author rempli avec les info mis dans postman
            author
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
});


// READ AUTHOR

AuthorRouter.get("/", async (req, res) =>{
    let authors = await Author.find({})
    return res.status(200).send({
        success: true,
        authors,
    });
});


// UPDATE AUTHOR

AuthorRouter.put("/update/:id", async (req, res) =>{
    const {id} = req.params
    // ici on crée la const de celui qu'on veut modifier
    const {age} = req.body

    let author = await Author.findByIdAndUpdate(id, {age}); // on peut aussi mettre findOneAndUpdate
    res.status(200).send({
        success: true,
        message: "Author is modified",
        author,
    })
});


// DELETE AUTHOR

AuthorRouter.delete("/delete/:id", async (req, res) =>{
    try {
        const {id} = req.params
        await Author.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "Author is deleted"
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        });
    }
});




module.exports = AuthorRouter;
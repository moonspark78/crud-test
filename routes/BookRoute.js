const express = require('express');
const Book = require("../models/Book")
const BookRouter = express.Router();

// CREATE BOOK

BookRouter.post('/book', async (req, res) => {
    try {
        const {title, description, authorId} = req.body
        if (!title || !description || !authorId){
            res.status(400).send({
                success: false,
                message: "Il manque des données"
            })
        }
        let book = await Book({title, description, author: authorId})
        await book.save()
        return res.status(200).send({
            success: true,
            message: "Le Livre a bien était crée",
            // Cette ligne permet d'afficher le model author rempli avec les info mis dans postman
            book
        });

    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        });
        
    }
});

// AFFICHER UN SEUL LIVRE

BookRouter.get("/find/:id", async (req, res) =>{
    try {
        const {id} = req.params
        let book = await Book.findById(id).populate("author")

        if(!book){
            return res.status(404).send({
                success: false,
                message: "Le livre n'a pas était Trouvé",
            })
        }
        return res.status(200).send({
            success: true,
            message: "Le livre a était Trouver",
            book
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message
        })
    }
});



module.exports = BookRouter;
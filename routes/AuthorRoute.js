const express = require('express')
const Author = require('../models/Author')
const AuthorRouter = express.Router();

AuthorRouter.get("/", async (req, res))
const express = require("express"); 
const app = express();
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const db = mongoose.connection

 // On import ca apres avoir fais les schéma et les routes 
const AuthorRouter = require ("./routes/AuthorRoute")
//const BookRouter = require("./routes/BookRoute")
// en routage 


app.use(express.urlencoded({ extended: true}))

db.once("open", () => {
  console.log('[📚Database] MongoDB connected')
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/soulidb');
}

app.use("/api", AuthorRouter)

app.listen(port, () => console.log(`[🚀 SERVER 🚀] on port: ${port}`))
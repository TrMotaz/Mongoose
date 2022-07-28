const express= require ("express")

const app = express()

const connectDB=require("./config/connectDB")
const port = 5000

connectDB()

app.listen(port,(err) =>
err?console.log("erreur"):console.log(`server is running on port  ${port}`))

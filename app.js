//EXPRESS SPECIFIC
const express = require('express');

const app = express()

const path = require('path')

const port = 2424;

//STATIC FOLDER
app.use('/public', express.static('public')) //for serving static files


//SETTING VIEW ENGINE
app.set('view engine', 'pug')    //template engine is set as pug
app.set('views',path.join(__dirname,'views'))

//ENDPOINTS
app.get('/', (req, res) => {
    res.status(200).render("home.pug") //for the '/' endpoint
})

app.get('/contact', (req, res) => {
    res.status(200).render("contact.pug") //for the '/contact' endpoint
})

app.get('/about',(req,res)=>{
    res.status(200).render('about.pug')
})

//STARTING SERVER
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})
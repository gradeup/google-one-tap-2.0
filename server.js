const express = require('express')
const request = require('request')
const app = express()
const port = 3001
const path = require('path')
const hbs = require('hbs')
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY
const HOST_BASE_URL = process.env.HOST_BASE_URL
const google_api_key_dict = {google_api_key: GOOGLE_API_KEY}


app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 

app.set('view engine', 'hbs');
app.set('views', './views')

app.get('/', (req,res) => {
    res.render('index',google_api_key_dict)
})

app.get('/blur', (req,res) => {
    res.render('bg-blur',google_api_key_dict)
})

app.get('/renderGoogleYolo', (req,res)=> {
    res.render('google-yolo',google_api_key_dict)
})

app.listen(port, () => {
    console.log(`app running at port:${port}`)
})

const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server starting in port ${PORT}`)
        })
    } catch (e) {
        console.log(`Server ERROR ${e}`)
    }
}

start()


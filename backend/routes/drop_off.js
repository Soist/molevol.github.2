const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("drop off, 6 locations")
})

router.get('/IBB', (req, res) => {
    res.send("drop off IBB")
})

router.get('/EBB', (req, res) => {
    res.send("drop off EBB")
})

router.get('/ES&T', (req, res) => {
    res.send("drop off ES&T")
})

router.get('/MoSE', (req, res) => {
    res.send("drop off MoSE")
})

router.get('/Cherry Emerson', (req, res) => {
    res.send("drop off Cherry Emerson")
})

router.get('/Marcus', (req, res) => {
    res.send("drop off Marcus")
})
module.exports = router
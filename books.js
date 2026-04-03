const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "This is the books page."});
});

router.post('/', (req, res) => {
    console.log(req.body); // Assuming you have body-parser middleware set up
    res.json({message: "Post request - Creating new book."});
});

router.put('/', (req, res) => {
    res.json({message: "Put request - Updating book."});
});

router.delete('/', (req, res) => {
    res.json({message: "Delete request - Deleting book."});
});

module.exports = router;
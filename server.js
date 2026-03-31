const express = require('express');

const app = express();

app.use('/products', require('./controllers/products'));
app.use('/users', require('./controllers/users'));

app.get("/", (req, res) => {
    res.json({message: "Hello, World!"});
});

app.get("/about", (req, res) => {
    res.json({message: "This is the about page."});
});

app.get("/products", (req, res) => {
    res.json({message: "This is the products page."});
});


app.get("/users/:id", (req, res) => {
    console.log(req.params.id);

    const userId = req.params.id;
    res.json({message: `This is the details for user ${userId}.`});
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
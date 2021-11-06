const express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
const app = express();
const cors = require('cors')

const _PORT = 3001;

const userRoutes = require('./src/routes/users.route');
const auth = require("./src/middleware/auth");
const categoriesRoutes = require('./src/routes/Categories.route');
const productRoutes = require('./src/routes/Products.route');
const cartRoutes = require('./src/routes/Cart.route');

app.use(express.json());
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use(cors())

app.use('/user', userRoutes);

app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
});

app.use("/categories", categoriesRoutes);

app.use("/product", productRoutes);

app.use("/cart", auth, cartRoutes);



app.listen(_PORT, () => {
    console.log(`Server running at ${_PORT}`);
})
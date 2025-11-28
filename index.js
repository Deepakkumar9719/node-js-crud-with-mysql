const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const expressLayouts = require('express-ejs-layouts');
const webRoutes = require('./routes/web');


dotenv.config();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);


// View engine
app.set('view engine', 'ejs');
app.set('layout', './layouts/main');

// Routes
app.use('/', webRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

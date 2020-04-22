const express = require('express')
const app = express();

// set up author routes
const authorRouter = require('./routes/authorRouter');

// set up recommendations routes
const recommendationsRouter = require('./routes/recommendationsRouter');

// set up recommendations routes
const listRouter = require('./routes/listRouter');

// set up search routes
const searchRouter = require('./routes/searchRouter');

// GET home page
app.get('/', (req, res) => {
    res.send('<H1>Toplate</H1>')
});


// Handle author-management requests
// the author routes are added onto the end of '/author-management'
app.use('/author-management', authorRouter);

// Handle recommendations requests
// the recommendations routes are added onto the end of '/recommendations'
app.use('/recommendations', recommendationsRouter);

// Handle list requests
// the recommendations routes are added onto the end of '/list'
app.use('/list', listRouter);

// Handle search requests
// the recommendations routes are added onto the end of '/search'
app.use('/search', searchRouter);

require('./model')

app.listen(process.env.PORT || 3000, () => {
    console.log("The library app is running!");
})


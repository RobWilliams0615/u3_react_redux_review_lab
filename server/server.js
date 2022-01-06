const express = require('express');
const db = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const routes = require('./routes/index');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

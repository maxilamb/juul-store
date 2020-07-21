const express = require('express');
const helmet = require('helmet');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');

const { PORT, NODE_ENV } = process.env;

const app = express();

app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../', 'build')));
app.use(express.static(path.join(__dirname, 'public')));

if (NODE_ENV === 'development') {
  app.use(morgan('combined'));
}

require('./routes/feedback')(app);
require('./routes/order')(app);
require('./routes/review')(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'));
});

app.use((req, res) => res.sendStatus(404));

const port = PORT || 5000;
app.listen(port);

// Bring in dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Create an express app
const app = express();

// Setup logger middleware
app.use(morgan('tiny'));
// Setup cors middleware
app.use(cors());

// When a GET request is received to the path /
app.get('/', (req, res) => {
  // Send a JSON response
  res.json({
    message: 'Hello World! 🌈'
  });
});
app.get('/records', (req, res) => {
    res.json([{
      id: 1,
      Artist: 'Stevie Wonder',
      Album: 'Songs in the Key of Life',
      Song: 'As',
      ImageURL: 'https://img.discogs.com/JkzipWJ_WX444kzI1nf6J2By-YM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5415885-1403617163-5412.jpeg.jpg'
    }, {
      id: 2,
      Artist: 'Curtis Mayfield',
      Album: 'Back to the World',
      Song: 'Right on for the Darkness',
      ImageURL: 'https://img.discogs.com/FXFY0sXrnhhAbDs2Sa4Oq8xGUns=/fit-in/596x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-421394-1275691782.jpeg.jpg'
    }, {
      id: 3,
      Artist: 'David Bowie',
      Album: 'Ziggy Stardust',
      Song: 'Moonage Daydream',
      ImageURL: 'https://img.discogs.com/BDb-RySLgwbiKVywnpgzylrFYn4=/fit-in/600x605/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-618952-1443451473-7889.jpeg.jpg'
    }, {
      id: 4,
      Artist: 'Beastie Boys',
      Album: 'Ill Communication',
      Song: 'Sabrosa',
      ImageURL: 'https://img.discogs.com/uk8DOcGh2TANrKucsBOnYfagVf0=/fit-in/600x591/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-187027-1451736077-9901.jpeg.jpg'
    }, {
      id: 5,
      Artist: 'George Benson',
      Album: 'Other Side of Abbey Road',
      Song: 'I Want You',
      ImageURL: 'https://img.discogs.com/ndPQK3fPXaMNyDq1WFGcvIOE2gY=/fit-in/599x599/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3544713-1341875869-9792.jpeg.jpg'
    }])
  });

// Not Found (404) handler
app.use((req, res, next) => {
  // Set the response status code
  res.status(404);
  const error = new Error('Not Found. 🔍');
  // Forward the error to the error handler
  next(error);
});

// Error handler
app.use((error, req, res, next) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
    error: error.stack
  });
});

// Set the PORT to listen on
const port = process.env.PORT || 3008;
// Listen on the port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
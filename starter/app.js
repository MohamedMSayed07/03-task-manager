const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasksRoutes');
const connectDB = require('./db/connect');
// To use .env variables (environment vars)
const dotenv = require('dotenv').config();


// middleware
app.use(express.static(`./public`));
// Middleware to parse JSON in the request body
app.use(express.json());



// routes
app.get('/', (req, res, next) => {
  res.status(200).send('Task Manager App');
});


app.use('/api/v1/tasks',tasksRoutes);

// app.get('/api/v1/tasks')
// app.post('/api/v1/tasks')
// app.get('/api/v1/tasks/:id')
// app.patch('/api/v1/tasks/:id')
// app.delete('/api/v1/tasks/:id')

const port = 3000;


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {console.log(`Server is listening on port ${port}...`)});
  } catch (err) {
    console.log(err);
  }
};

start();

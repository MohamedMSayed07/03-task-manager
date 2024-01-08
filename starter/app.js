const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasksRoutes');


// middleware

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

app.listen(port, console.log(`Server is listening on port ${port}...`));

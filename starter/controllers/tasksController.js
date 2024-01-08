

module.exports.getAllTasks = (req, res) => {
  res.send('All items from the file');
};

module.exports.createTask = (req, res) => {
  res.send('Create Task');
};

module.exports.getTask = (req, res) => {
  res.send('One Task');
};

module.exports.updateTask = (req, res) => {
  res.send('Edit Task');
};

module.exports.deleteTask = (req, res) => {
  res.send('Delete Task');
};


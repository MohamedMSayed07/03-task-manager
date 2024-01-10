const Task = require('../models/taskModel');

module.exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({tasks});
  } catch(err) {
    res.status(500).json({msg:err});
  }
};

module.exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({task});
  } catch(err) {
    res.status(500).json({msg:err});
  }
};

module.exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    
    if(!task) 
      return res.status(404).json({msg: `No task with id: ${req.params.id}`});

    res.status(200).json({task});

  } catch(err) {
    res.status(500).json({msg:err});
  }
};

module.exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    
    if(!task) 
      return res.status(404).json({msg: `No task with id: ${req.params.id}`});

    res.status(200).json({task});

  } catch(err) {
    res.status(500).json({msg:err});
  }
};

module.exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    
    if(!task) 
      return res.status(404).json({msg: `No task with id: ${req.params.id}`});

    res.status(200).json({task});

  } catch(err) {
    res.status(500).json({msg:err});
  }
};
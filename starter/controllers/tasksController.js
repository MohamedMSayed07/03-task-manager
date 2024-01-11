const Task = require('../models/taskModel');
const catchAsync = require('../middleware/catchAsync');
const {createCustomError} = require('../errors/custom-error');

module.exports.getAllTasks = catchAsync( async (req, res, next) => {
    const tasks = await Task.find();
    res.status(200).json({tasks});
});

module.exports.createTask = catchAsync( async (req, res, next) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

module.exports.getTask = catchAsync( async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    
    if(!task) 
      return next(new createCustomError({msg: `No task with id: ${req.params.id}`}, 404));
    
      res.status(200).json({task});
});

module.exports.deleteTask = catchAsync( async (req, res, next) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    
    if(!task) 
    return next(new createCustomError({msg: `No task with id: ${req.params.id}`}, 404));

    res.status(200).json({task});
});

module.exports.updateTask = catchAsync( async (req, res, next) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    
    if(!task) 
    return next(new createCustomError({msg: `No task with id: ${req.params.id}`}, 404));

    res.status(200).json({task});
});
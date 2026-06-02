const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({});
    res.status(200).json({tasks});
});
        
      
const createTask =asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
});

const getTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findById(req.params.id);
    if (!task) {
        return next(createCustomError(`No task with id ${req.params.id}`, 404));
        // const error = new Error(`No task with id ${req.params.id}`);
        // error.status = 404;
        // return next(error); // If the task is not found, an error is created with a message indicating that no task with the specified ID exists. The error is then thrown, which will be caught by the asyncWrapper and passed to the error-handling middleware for centralized error handling.
       // return res.status(404).json({msg: `No task with id ${req.params.id}`});
    }
    res.status(200).json({task});
});

const updateTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
    if (!task) {
        return next(createCustomError(`No task with id ${req.params.id}`, 404));
    }
    res.status(200).json({task});
});

const deleteTask = asyncWrapper(async (req, res, next) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
        return next(createCustomError(`No task with id ${req.params.id}`, 404));
    }
    res.status(200).json({task});
});
        



module.exports = {
    getAllTasks,
   createTask,
    getTask,
    updateTask,
    deleteTask
}
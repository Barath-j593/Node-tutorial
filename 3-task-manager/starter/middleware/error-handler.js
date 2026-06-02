const {customError} = require('../errors/custom-error');

const errorHandlerMiddleware = (err, req, res, next) => {
        if (err instanceof customError) {
            return res.status(err.status).json({msg: err.message});
        }
    res.status(500).json({msg:err.message});
}

module.exports = errorHandlerMiddleware;
const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            next(error); // If an error occurs in the asynchronous function, it will be caught and passed to the next middleware (which is typically an error-handling middleware) using the next() function. This allows for centralized error handling in the application.
        }
}
}

module.exports = asyncWrapper;
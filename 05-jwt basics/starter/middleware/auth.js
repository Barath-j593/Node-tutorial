const jwt = require('jsonwebtoken');
const {UnauthenticatedError}=require('../errors');
const authenmiddleware=(req,res,next)=>{
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided');
    }
    const token = authHeader.split(' ')[1];

    try {
        console.log(token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);
        req.user = { id: decoded.id, username: decoded.username };
        next();
    } catch (error) {
        //console.log(error);
        throw new UnauthenticatedError('Invalid token');
    }
}

module.exports=authenmiddleware;
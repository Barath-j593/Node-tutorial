//check username and password in post(/login) request.
//if exist create new jwt
//send back to frontend

//setup authenticated route get(/dashboard) to test if the token is working or not

const customError = require('../errors/custom-error');
const jwt = require('jsonwebtoken');
const {BadRequestError}=require('../errors');


const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new BadRequestError('Please provide username and password');
    }
        //just for demo, normally provided by DB!!!!
    const id = new Date().getDate();
    console.log(id);
    const token = jwt.sign({ id,username }, process.env.JWT_SECRET, { expiresIn: '30d' });

    res.status(200).json({ msg: 'user created', token });
}

const dashboard = async (req, res) => {    
        const luckyNumber = Math.floor(Math.random() * 100);
        res.status(200).json({ msg: `Hello ${req.user.username}, your lucky number is ${luckyNumber}` });
}

module.exports = {
    login,
    dashboard
};
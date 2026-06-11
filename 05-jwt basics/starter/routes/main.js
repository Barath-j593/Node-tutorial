const express=require('express');
const router=express.Router();

const {login, dashboard}=require('../controllers/main');

const authenmiddleware=require('../middleware/auth');

router.route('/login').post(login);
router.route('/dashboard').get(authenmiddleware, dashboard);

module.exports=router;
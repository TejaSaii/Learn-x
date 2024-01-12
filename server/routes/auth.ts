import express from 'express';

const router = express.Router();

router.post('/user/signup', userSignUp);
router.post('/admin/signup', adminSignUp);
router.post('/user/login', userLogin);
router.post('/admin/login', adminLogin);
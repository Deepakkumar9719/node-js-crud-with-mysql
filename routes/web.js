const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.index);
router.get('/users/create', userController.createForm);
router.post('/users/create', userController.create);
router.get('/users/edit/:id', userController.editForm);
router.post('/users/edit/:id', userController.update);
router.get('/users/delete/:id', userController.delete);
router.get('/users/:id', userController.show);

module.exports = router;

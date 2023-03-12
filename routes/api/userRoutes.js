const router = require('express').Router();
const { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, removeFriend } = require('../../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser);
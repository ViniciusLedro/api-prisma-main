import { Router } from "express";
import { addUser, createUserPost, delUser, findAllUsers, getUserByEmail, update } from "../controllers/UserController.js";

const router = Router();

router.post('/users', addUser);
router.get('/users', findAllUsers);

router.get('/users/:email', getUserByEmail);
router.get('/users/:email', update);
router.get('/users/:email', delUser);

router.post('/users/post', createUserPost);



export default router;
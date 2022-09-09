import express from 'express';
import { login, register, setAvatar } from '../controllers/user.js';

const router = express.Router()
router.post("/register", register);
router.post("/login", login);
router.post("/setavatar/:id", setAvatar)
export default router;
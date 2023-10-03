import express from "express";
import { 
    login,
    register,
    getUser,
    update,
    logout
} from "../controllers/userController.js";

const router = express.Router()

router.post('/login', login)
router.post('/register', register)
router.post('/logout', logout)
router.route('/profile').get(getUser).put(update)

export default router
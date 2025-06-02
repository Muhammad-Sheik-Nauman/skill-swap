import express from "express"
import authRouter from "./authRouter.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Skill Swap API!' });
});

router.use('/api/v1/', authRouter)

export default router
import express from 'express';
const router = express.Router();

router.get('/login', (req, res) => {
    res.render('usuario/login');
})

export default router;
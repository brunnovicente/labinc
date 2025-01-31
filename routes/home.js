import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home/index')
})

router.get('/noticia', (req, res) => {
    res.render('home/noticia')
})

router.get('/pesquisador', (req, res) => {
    res.render('home/pesquisador')
})

router.get('/publicacao', (req, res) => {
    res.render('home/publicacao')
})

router.get('/projeto', (req, res) => {
    res.render('home/projeto')
})

router.get('/edital', (req, res) => {
    res.render('home/edital')
})

router.get('/edital', (req, res) => {
    res.render('home/edital')
})

router.get('/curso', (req, res) => {
    res.render('home/curso')
})

router.get('/icaro', (req, res) => {
    res.render('home/icaro')
})

export default router;
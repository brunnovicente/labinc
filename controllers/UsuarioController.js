class UsuarioController {
    login = function (req, res) {
        res.render('usuario/login');
    }
}

export default new UsuarioController();
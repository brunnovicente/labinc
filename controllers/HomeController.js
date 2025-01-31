class HomeController{

    index = function (req, res){
        res.render('home/index');
    }

    icaro = function (req, res){
        res.render('home/icaro');
    }

    noticia = function (req, res){
        res.render('home/noticia');
    }

    pesquisador = function (req, res){
        res.render('home/pesquisador');
    }

    publicacao = function (req, res){
        res.render('home/publicacao');
    }

    projeto = function (req, res){
        res.render('home/projeto');
    }

    edital = function (req, res){
        res.render('home/edital');
    }

    curso = function (req, res){
        res.render('home/curso');
    }

}

export default new HomeController();
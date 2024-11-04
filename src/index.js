const express =  require('express');
const session = require('express-session');
const flash = require('express-flash');
const FileStore = require('session-file-store');

const app = express();
const conn = require('./db/conn');
const User = require ('./models/User.js')

const metricasRoutes = require("./routes/metricasRoutes");
const authRoutes = require("./routes/authRoutes");
const MetricasController = require("./controllers/MetricasController");

const Produtos = require('./models/Produtos');

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

//session midleware, para salvar os arquivos da sessão
/*app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () {},
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: { //Config, de cookie da session
            secure: false,
            maxAge: 3600000,
            expires: new Date(Date.now() + 3600000),
            httpOnly: true, // para rodar localmente
        },
    }),
) */


//flash messages - Status do sistema
// flash messages - para exibir erros ou mensagens de sucesso ao usuário
app.use(flash());


//Serve arquivos estáticos (imagens, CSS, JavaScript, etc.) da pasta public.
// Qualquer solicitação para um recurso na pasta public será atendida diretamente.
app.use(express.static("public"));


// set session to res.  - Verificar se existe alguma coisa do usaurio na sessao
app.use((req, res, next) => {
    // console.log(req.session)
    console.log(req.session.userid);

    if (req.session.userid) {
        res.locals.session = req.session;
    }

    next();
});

//Define uma rota para ---. Requisições que começam com /toughts serão tratadas pelo roteador toughtsRoutes.
app.use("/metricas", metricasRoutes);

//Define uma rota para a raiz (/). Requisições para a raiz serão tratadas pelo roteador authRoutes.
app.use("/", authRoutes);

//Define uma rota GET para a raiz (/) que chama o metodo showToughts do ToughController.
// Essa linha geralmente serve para renderizar a página inicial
app.get("/", MetricasController.showMetricas);




//Chamar a aplicação

conn
    .sync({ force: true })
    //.sync()
    .then(() => {app.listen(3000);})
    .catch(err => console.log(err))


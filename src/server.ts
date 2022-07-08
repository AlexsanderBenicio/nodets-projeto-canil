import  express  from "express";
import  dotenv  from "dotenv";
import  mustache  from "mustache-express";
import path from "path";
import mainRoutes from './routes/index';

//variaveis de ambiente
dotenv.config();

//configuração do servidor
const server = express();

//criando o tamplate mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.set('mustache', mustache());

//configuração da pasta publica
server.use(express.static(path.join(__dirname, '../public')));

//rotas
server.use(mainRoutes);

//error 404
server.use((req, res) => {
    res.send('Página não encontrada!');
});

//iniciando o servidor
server.listen(process.env.PORT);
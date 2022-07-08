import  express  from "express";
import  dotenv  from "dotenv";
import  mustache  from "mustache-express";
import path from "path";

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

//iniciando o servidor
server.listen(process.env.PORT);
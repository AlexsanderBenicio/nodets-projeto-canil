# nodets-projeto-canil

# PROJETO FEITO NO MÓDULO DO CURSO NODE + TYPESCRIPT NA PLATAFORMA B7WEB
# COMANDOS USADOS PARA CONFIGURAR E CRIAR O PROJETO

## 0 - DEPENDENCIAS INSTALADAS GLOBALMENTE (npm install -g nodemon typescript ts-node)

## 1 - "npm init"
## 2 - "tsc --init" - entrar no tsconfig.json - mudar o "target" para "es6" - descomentar o "outDir" e colocar o valor como "./dist" - descomentar o "rootDir" e colocar o valor como "./src" - descomentar o "moduleResolutions" 

## 3 - "npm install express mustache-express dotenv"

## 4 - "npm install --save-dev @types/express @types/express-mustache @types/node"

## 6 - Configurar o "scripts" em "package.json" incluindo um nome de inicialização do projeto ("start-dev":"nodemon -e ts,json,mustache src/server.ts")

# INSTALAÇÃO
## "npm install"

# INICIALIZAÇÃO
## "npm run start-dev"

# ################################################################################

# CRIANDO O SERVIDOR DO PROJETO

# import  express  from "express";
# import  dotenv  from "dotenv";
# import  mustache  from "mustache-express";
# import path from "path";

<!-- //variaveis de ambiente -->
# dotenv.config();

<!-- //configuração do servidor -->
# const server = express();

<!-- //criando o tamplate mustache -->
# server.set('view engine', 'mustache');
# server.set('views', path.join(__dirname, 'views'));
# server.set('mustache', mustache());

<!-- //configuração da pasta publica -->
# server.use(express.static(path.join(__dirname, '../public')));

<!-- //rotas -->

<!-- //iniciando o servidor -->
# server.listen(process.env.PORT);
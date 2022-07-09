# nodets-projeto-canil

# PROJETO FEITO NO MÓDULO DO CURSO NODE + TYPESCRIPT NA PLATAFORMA B7WEB 
# COMANDOS USADOS PARA CONFIGURAR E CRIAR O PROJETO

# DEPENDENCIAS INSTALADAS GLOBALMENTE
`npm install -g nodemon typescript ts-node`

# inicialização do projeto
`npm init`

# configurando o TS
`tsc --init` 

# Entrar no tsconfig.json - mudar o "target" para "es6" - descomentar o "outDir" e colocar o valor como "./dist" - descomentar o "rootDir" e colocar o valor como "./src" - descomentar o "moduleResolutions" 

# instalando o express
`npm install express mustache-express dotenv`

# instalando as devDependencias
`npm install --save-dev @types/express @types/express-mustache @types/node`

# 6 - Configurar o "scripts" em "package.json" incluindo um nome de inicialização do projeto ("start-dev":"nodemon -e ts,json,mustache src/server.ts")

# INSTALAÇÃO
`npm install`

# INICIALIZAÇÃO
`npm run start-dev`

# Fazendo o commit dos arquivos no git

`git add .`
`git commit -m "criando as rotas e controllers" `
`git push`
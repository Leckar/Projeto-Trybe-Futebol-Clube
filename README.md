# Trybe Futebol Clube - API de gerenciamento de partidas


Este projeto tem como objetivo construir um back-end dockerizado utilizando modelagem de dados através do Sequelize e seguindo as regras de negócio que atendam aos requisitos do projeto. A API é capaz de ser consumida por um front-end já provido.

## Estrutura do projeto
O projeto é composto por quatro entidades importantes para sua estrutura:

Banco de dados: Será um container docker MySQL configurado no docker-compose através de um serviço definido como db. Durante a execução dos testes sempre será acessado pelo sequelize e via porta 3002 do localhost.

Back-end: Ambiente no qual foi desenvolvida uma Restful API seguindo os princípios de POO e SOLID por mim. Deve rodar na porta 3001, porta pela qual o front-end faz suas requisições. Ao clonar o repositório será necessário criar um arquivo .env e definir as variáveis de ambiente utilizadas no projeto.

Front-end: O front-end, com exceção da Dockerfile, já foi desenvolvido pela Trybe. A única exceção será o seu Dockerfile que precisará ser configurado. O front-end rodará na porta 3000 e se comunica com serviço de back-end pela url http://localhost:3001 através dos endpoints foram construídos. 

Docker: O docker-compose tem a responsabilidade de unir todos os serviços conteinerizados (backend, frontend e db) e subir o projeto completo com o comando npm run compose:up. 

### Requisitos:
 - Implementar uma API utilizando o método TDD;
 - Integrar, através do docker-compose, as aplicações para que elas funcionem consumindo um banco de dados;
 - Construir um back-end dockerizado utilizando modelagem de dados através do Sequelize;
 - Implementar regras de negócio para popular adequadamente a tabela disponível no front-end que será exibida para a pessoa usuária do sistema;
 - Ter um relacionamento entre as tabelas teams e matches para fazer as atualizações das partidas;
 - Requerer um token para acessar as tabelas de partida e o endpoint de role, portanto a pessoa deverá estar logada para fazer as alterações.
 
 #### Para rodar o projeto é necessário ter o node 16, o docker e o docker-compose instalados

### Instalação e execução:
 1. Clone este repositório em sua máquina local.
 ```bash
  git clone git@github.com:Leckar/Projeto-Trybe-Futebol-Clube.git
 ```
 2. Instale as dependências.
```bash
  npm install
```
 3. Crie um arquivo .env e atribua as variáveis de ambiente requeridas pelo projeto.
```shell
 JWT_SECRET=jwt_secret
 APP_PORT=3001
 DB_USER=seu_user
 DB_PASS=sua_senha
 DB_HOST=localhost
 DB_PORT=3002
``` 
 4. No diretório raiz do projeto, execute o comando npm run compose:up para subir o projeto completo.
```bash
  npm run compose:up
```
 5. Acesse o front-end em http://localhost:3000/ e teste as funcionalidades da API.


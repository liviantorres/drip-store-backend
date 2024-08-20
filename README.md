# Drip Store Backend

## Descrição

O **Drip Store Backend** é uma aplicação backend desenvolvida com Node.js e PostgreSQL. Ele fornece uma API RESTful para gerenciar usuários, produtos e categorias em um sistema de e-commerce. Inclui autenticação JWT para segurança e endpoints para CRUD (Create, Read, Update, Delete) de recursos.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework para construir a API.
- **Sequelize**: ORM para PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **JWT**: Para autenticação e controle de acesso.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolvimento.

## Estrutura do Projeto

- **src/**
  - **controllers/**: Contém os controladores que gerenciam a lógica de negócios.
  - **models/**: Define os modelos do banco de dados com Sequelize.
  - **routes/**: Define as rotas da API.
  - **server.js**: Arquivo principal para iniciar o servidor Express.
- **migrations/**: Scripts para criar e alterar o banco de dados.
- **tests/**: Contém os testes da aplicação.

## Configuração

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/drip-store-backend.git
   cd drip-store-backend
   ```
## 2. Instalação

Para instalar as dependências do projeto, execute o seguinte comando na raiz do projeto:
   ```bash
        npm install 
   ```
## 3. Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:

   ```plaintext
      PORT=3000
      DB_HOST=localhost
      DB_USER=seu_usuario
      DB_PASSWORD=sua_senha
      DB_NAME=drip_store
      JWT_SECRET=sua_chave_secreta
   ```

## 4. Execução das Migrations

As migrations são usadas para criar e atualizar o esquema do banco de dados. Siga os passos abaixo para aplicar as migrations:

1. **Crie o arquivo de configuração `.sequelizerc`** (se ainda não existir) com o seguinte conteúdo:

    ```plaintext
    {
      "models-path": "src/models",
      "migrations-path": "src/migrations",
      "seeders-path": "src/seeders"
    }
    ```

2. **Execute as migrations** usando o comando abaixo:

    ```bash
    npx sequelize-cli db:migrate
    ```

    Este comando aplicará todas as migrations pendentes e atualizará o esquema do banco de dados de acordo com os arquivos de migration definidos em `src/migrations`.



## 5. Iniciando o Servidor

Para iniciar o servidor, siga os passos abaixo:

1. **Certifique-se de que todas as dependências estão instaladas**. Se ainda não fez isso, execute o comando:

    ```bash
    npm install
    ```

2. **Inicie o servidor** usando o comando abaixo:

    ```bash
    npm start
    ```

    O servidor estará disponível na porta configurada no arquivo `.env`. Por padrão, a aplicação será iniciada na porta `3000`.

3. **Verifique se o servidor está funcionando** acessando a URL `http://localhost:3000` no seu navegador ou utilizando uma ferramenta como Postman para testar os endpoints da API.

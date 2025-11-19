<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

# API NestJS

Este repositório contém uma API desenvolvida com **NestJS**, estruturada em módulos desacoplados, utilizando **TypeORM**, **JWT**, **bcrypt**, **validação com class-validator**, e serviços adicionais como envio de e-mail via Resend.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **NestJS 11**
- **TypeScript**
- **TypeORM**
- **JWT (Autenticação)**
- **Passport + passport-jwt**
- **MySQL**
- **Bcrypt**
- **Class-validator / Class-transformer**
- **Resend (Envio de e-mails)**

---

## 📁 Estrutura do Projeto

A estrutura está organizada em módulos dentro de `src/modules` e módulos compartilhados em `src/shared`.

```
src/
├─ modules/
│  ├─ auth/
│  │  ├─ domain/
│  │  ├─ infra/
│  │  ├─ interfaces/
│  │  ├─ services/
│  │  ├─ strategies/
│  │  └─ utils/
│  │  └─ auth.module.ts
│  ├─ mail/
│  │  ├─ mail.module.ts
│  │  └─ resend-mail.service.ts
│  ├─ users/
│  │  ├─ domain/
│  │  ├─ entities/
│  │  ├─ infra/
│  │  ├─ services/
│  │  ├─ utils/
│  │  └─ users.module.ts
├─ shared/
│  ├─ decorators/
│  ├─ guards/
│  └─ typeorm/
│     └─ migrations/
├─ app.module.ts
└─ main.ts
```

---

## ⚙️ Scripts disponíveis

Do `package.json`:

| Script                                            | Descrição                                            |
| ------------------------------------------------- | ---------------------------------------------------- |
| `npm run build`                                   | Compila o projeto NestJS                             |
| `npm run start`                                   | Inicia a aplicação                                   |
| `npm run start:dev`                               | Inicia em ambiente de desenvolvimento com watch mode |
| `npm run lint`                                    | Executa ESLint com autofix                           |
| `npm run migration:create --name=NomeDaMigration` | Cria uma migration TypeORM                           |
| `npm run migration:run`                           | Executa migrations                                   |
| `npm run test`                                    | Executa testes unitários                             |
| `npm run test:e2e`                                | Executa testes end-to-end                            |

---

## 🔐 Autenticação

O projeto utiliza:

- **JWT** para geração de tokens
- **Passport** para estratégias de autenticação
- **Guards personalizados** em `shared/guards`

Tokens são configurados via `@nestjs/jwt` utilizando variáveis de ambiente.

---

## 🛠️ Banco de Dados

- ORM: **TypeORM**
- Banco: **MySQL**
- Migrações dentro de `shared/typeorm/migrations`
- Data Source: `shared/typeorm/data-source.ts`

---

## 📬 Envio de E-mails

Implementado com a biblioteca **Resend** no módulo `mail`.

Exemplo de uso está no arquivo `resend-mail.service.ts`.

---

## 📦 Dependências Principais

```
@nestjs/common
@nestjs/core
@nestjs/typeorm
@nestjs/jwt
@nestjs/passport
typeorm
jsonwebtoken
bcrypt
passport-jwt
class-validator
class-transformer
mysql
resend
```

## 📦 Dependências de Desenvolvimento

```
@nestjs/cli
@nestjs/testing
typescript
ts-node
jest
ts-jest
eslint
prettier
```

---

## ▶️ Como Rodar o Projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure o arquivo `.env`

Exemplo:

```
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASS=senha
DATABASE_NAME=meubanco
JWT_SECRET=minha_chave
JWT_EXPIRES_IN=3600s
RESEND_API_KEY=sua_chave
```

### 3. Execute as migrações

```bash
npm run migration:run
```

### 4. Inicie o servidor

```bash
npm run start:dev
```

---

## 🔧 Configuração

### 📌 Variáveis de Ambiente Necessárias (.env)

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
DB_HOST
DB_PORT
DB_USER
DB_PASS
DB_NAME
PORT
JWT_SECRET
RESEND_API_KEY
RESEND_FROM_EMAIL
```

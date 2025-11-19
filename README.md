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

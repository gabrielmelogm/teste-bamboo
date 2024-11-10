# Teste bamboo
> Uma aplicação de controle financeiro para teste da bamboo

## Requisitos
- Node >= 18

## Estrutura do projeto
```bash
├── apps/
│ ├── api/
│ ├── web/
```

## Ambiente 🛠️
| Biblioteca  | Ambiente | Descrição |
| ------------- | ------------- | ------------- |
| Node 18.x | Front, Back | Runtime javascript |
| Typescript | Front, Back | Superset javascript para tipagem estática |
| Zod | Front, Back | Biblioteca de validação de dados |
| NestJs | Back | Framework node |
| Prisma | Back | ORM node |
| Postgres | Back | Banco de dados |
| Jest | Back | Framework de testes |
| Vue3 | Front | Framework web javascript |
| SCSS | Front | Motor CSS |
| Vitest | Front | Framework de testes |

## Configurando o ambiente

### Backend
1. Navegue para pasta <code>/apps/api</code>
```bash
cd apps/api
```

2. Crie o <code>.env</code>
```bash
cp .env.example .env
```

3. Iniciando o banco de dados com <code>docker</code>
```bash
docker compose up -d
```

4. Instale as dependências
```bash
npm install
```

5. Rode as migrations
```bash
npx prisma migrate dev
```

6. Inicie o servidor
```bash
npm run start:dev
```

### Frontend
1. Navegue para pasta <code>/apps/web</code>
```bash
cd apps/web
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o projeto
```bash
npm run dev
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```

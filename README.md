# 🎬 Movie API  

API RESTful desenvolvida com **Node.js** e **Express.js**, que permite gerenciar filmes e reviews.  
O projeto foi construído com foco em **boas práticas**, **organização de código** e entendimento dos fundamentos de **APIs REST**.  

---

## 📌 Funcionalidades  

- **Filmes**  
  - Criar filmes  
  - Listar todos os filmes  
  - Buscar filme por ID  
  - Editar filmes  
  - Deletar filmes  

- **Reviews**  
  - Criar reviews para um filme  
  - Listar todas as reviews de um filme
  - Buscar review por ID 
  - Editar reviews existentes  
  - Deletar reviews  

---

## 🛠️ Tecnologias  

- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)
- Postman (testes e documentação das rotas)
  
---

## ⚙️ Endpoints  

### 🎬 Filmes
| Método | Rota        | Descrição                   |
|--------|-------------|-----------------------------|
| GET    | /filmes     | Lista todos os filmes       |
| GET    | /filmes/:id | Retorna um filme específico |
| POST   | /filmes     | Cria um novo filme          |
| PUT    | /filmes/:id | Atualiza um filme           |
| DELETE | /filmes/:id | Remove um filme             |

### 📝 Reviews
| Método | Rota                     | Descrição                          |
|--------|--------------------------|------------------------------------|
| GET    | /reviews                 | Lista todas as reviews             |
| GET    | /reviews/:id             | Retorna uma review específica      |
| POST   | /reviews                 | Cria uma nova review               |
| PUT    | /reviews/:id             | Atualiza uma review existente      |
| DELETE | /reviews/:id             | Remove uma review                  |

> Todas as rotas já estão configuradas e disponíveis na coleção do Postman: [`API_Filmes.postman_collection.json`](./API_Filmes.postman_collection.json)

---

## ▶️ Como importar a coleção no Postman:

1. Baixe o arquivo `API_Filmes.postman_collection.json`.
2. Abra o Postman.
3. Clique em "Import" no canto superior esquerdo.
4. Selecione o arquivo baixado.
5. Agora você terá todas as rotas prontas para teste.
   
---

## ▶️ Como Rodar  

```bash
git clone https://github.com/seu-usuario/movie-api.git
cd movie-api
npm install
npm start



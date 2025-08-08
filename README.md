https://hotel-brasileiro-front.vercel.app/
https://hotel-brasileiro-back.onrender.com

# Hotel Brasileiro

Bem-vindo ao repositório do **Hotel Brasileiro**, um hotel que valoriza a cultura nacional e a sustentabilidade, oferecendo uma experiência digital inovadora para hóspedes e gestores[1].

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Autores](#autores)

---

## Sobre o Projeto

O **Hotel Brasileiro** é um sistema de gestão para hotéis temáticos, com foco em sustentabilidade, eficiência operacional e valorização da cultura brasileira. O sistema permite reservas, controle de quartos, experiências turísticas, painel administrativo e relatórios de desempenho, promovendo uma experiência digital acessível e alinhada à cultura nacional[1].

---

## Funcionalidades

- Cadastro, edição e exclusão de hóspedes
- Gerenciamento de reservas, check-in e check-out
- Catálogo de experiências turísticas e culturais
- Geração de relatórios gerenciais e dashboards
- Painel administrativo para gestores
- Integração com sistema de pagamentos online
- Interface responsiva e acessível
- Segurança de dados (criptografia, autenticação, autorização)
- Backup automático diário do banco de dados[1]

---

## Tecnologias Utilizadas

### Frontend

- **React**: Interfaces dinâmicas e responsivas
- **JavaScript**
- **Axios**: Requisições HTTP
- **React-auth-kit**: Autenticação
- **React-router-dom**: Gerenciamento de rotas
- **Zustand**: Gerenciamento de estado global[1]

### Backend

- **Node.js**: Execução JavaScript no servidor
- **Express**: APIs RESTful
- **Bcrypt**: Hashing de senhas
- **JWT**: Autenticação baseada em tokens
- **Swagger**: Documentação de APIs[1]

### Banco de Dados

- **PostgreSQL**: Armazenamento relacional de dados[1]

### Design

- **Figma**: Prototipação e wireframes das interfaces[1]

---

## Arquitetura do Sistema

- **Frontend**: React.js consumindo APIs REST
- **Backend**: Node.js com Express.js
- **Banco de Dados**: PostgreSQL

---

## Instalação (usar o projeto localmente)

### Pré-requisitos

- Node.js

### Passos

1. Clone este repositório.
2. Instale as dependências do frontend e backend:
   ```bash
   npm install
   cd frontend-web
   npm install
   ```
3. Configure as variáveis de ambiente conforme o arquivo `.env`.

4. Execute o backend:
   ```bash
   cd backend
   npm start
   ```
5. Execute o frontend:
   ```bash
   cd frontend-web
   npm start
   ```
6. Acesse o sistema via navegador em `http://localhost:3001`[1].

---

## Como Usar

- **Login**: Acesse com seu e-mail e senha cadastrados.
- **Cadastro de Hóspedes**: Menu "Hóspedes" > "Novo Cadastro".
- **Reservas**: Menu "Reservas" > "Nova Reserva".
- **Check-in/Check-out**: Menu "Reservas" > selecione a reserva.
- **Experiências**: Menu "Experiências" > agende atividades.
- **Painel Administrativo**: Menu "Dashboard" para relatórios e gráficos[1].

---

## Estrutura de Pastas

### Frontend

```
frontend-web/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── Routes/
│   ├── services/
│   ├── App.js
│   └── index.js
```

### Backend

```
backend/
├── config/
├── controllers/
├── routes/
├── docs/
├── .gitignore
├── package.json
└── README.md
```


---

## Contribuição

1. Fork este repositório.
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'Minha nova feature'`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request[1].

---

## Licença

Este projeto está licenciado sob os termos da licença MIT[1].

---

## Autores

- Igor Willians Alves Bueno
- Cauã Kelvin Pereira de Sena
- Yasmin Pereira de Menezes
- Pedro Nicolas Pires Guimarães
- João Victor Julião Dos Santos Cardoso
- Estella Beatriz Gutemberg Vilarouca de Sousa[1]

---

Projeto desenvolvido como requisito para o curso Técnico em Desenvolvimento de Sistemas da Escola e Faculdade SENAI Suíço-Brasileira “Paulo Ernesto Tolle”[1].



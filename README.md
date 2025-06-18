Hotel Brasileiro: Sistema de Gestão Hoteleira Temática
Bem-vindo ao repositório do Hotel Brasileiro, um sistema de gestão hoteleira temático que valoriza a cultura nacional e a sustentabilidade, oferecendo uma experiência digital inovadora para hóspedes e gestores.

Índice
Sobre o Projeto

Funcionalidades

Tecnologias Utilizadas

Arquitetura do Sistema

Instalação

Como Usar

Estrutura de Pastas

Contribuição

Licença

Autores

Sobre o Projeto
O Hotel Brasileiro é um sistema de gestão para hotéis temáticos, com foco em sustentabilidade, eficiência operacional e valorização da cultura brasileira. O sistema permite reservas, controle de quartos, experiências turísticas, painel administrativo e relatórios de desempenho, promovendo uma experiência digital acessível e alinhada à cultura nacional.

Funcionalidades
Cadastro, edição e exclusão de hóspedes

Gerenciamento de reservas, check-in e check-out

Catálogo de experiências turísticas e culturais

Geração de relatórios gerenciais e dashboards

Painel administrativo para gestores

Comunicação via chat online e notificações

Integração com sistema de pagamentos online

Interface responsiva e acessível

Segurança de dados (criptografia, autenticação, autorização)

Backup automático diário do banco de dados

Tecnologias Utilizadas
Frontend
React: Interfaces dinâmicas e responsivas

JavaScript

Axios: Requisições HTTP

React-auth-kit: Autenticação

React-router-dom: Gerenciamento de rotas

Zustand: Gerenciamento de estado global

Backend
Node.js: Execução JavaScript no servidor

Express: APIs RESTful

Bcrypt: Hashing de senhas

JWT: Autenticação baseada em tokens

Swagger: Documentação de APIs

Banco de Dados
PostgreSQL: Armazenamento relacional de dados

DevOps
Docker: Conteinerização para implantação e portabilidade

Design
Figma: Prototipação e wireframes das interfaces

Arquitetura do Sistema
Frontend: React.js consumindo APIs REST

Backend: Node.js com Express.js

Banco de Dados: PostgreSQL

DevOps: Docker para ambientes isolados e portáveis

Instalação
Pré-requisitos
Node.js

Docker

PostgreSQL

Passos
Clone este repositório.

Instale as dependências do frontend e backend:

bash
cd frontend-web
npm install
cd ../backend
npm install
Configure as variáveis de ambiente conforme o arquivo .env.example.

Inicie o banco de dados PostgreSQL (pode ser via Docker).

Execute o backend:

bash
cd backend
npm start
Execute o frontend:

bash
cd frontend-web
npm start
Acesse o sistema via navegador em http://localhost:3000.

Como Usar
Login: Acesse com seu e-mail e senha cadastrados.

Cadastro de Hóspedes: Menu "Hóspedes" > "Novo Cadastro".

Reservas: Menu "Reservas" > "Nova Reserva".

Check-in/Check-out: Menu "Reservas" > selecione a reserva.

Experiências: Menu "Experiências" > agende atividades.

Painel Administrativo: Menu "Dashboard" para relatórios e gráficos.

Estrutura de Pastas
Frontend
text
frontend-web/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── Routes/
│   ├── services/
│   ├── App.js
│   └── index.js
Backend
text
backend/
├── config/
├── controllers/
├── routes/
├── docs/
├── frontend-web/
├── .gitignore
├── package.json
└── README.md
Contribuição
Fork este repositório.

Crie uma branch: git checkout -b minha-feature

Commit suas alterações: git commit -m 'Minha nova feature'

Push para a branch: git push origin minha-feature

Abra um Pull Request.

Licença
Este projeto está licenciado sob os termos da licença MIT.

Autores
Igor Willians Alves Bueno

Cauã Kelvin Pereira de Sena

Yasmin Pereira de Menezes

Pedro Nicolas Pires Guimarães

João Victor Julião Dos Santos Cardoso

Estella Beatriz Gutemberg Vilarouca de Sousa

Projeto desenvolvido como requisito para o curso Técnico em Desenvolvimento de Sistemas da Escola e Faculdade SENAI Suíço-Brasileira “Paulo Ernesto Tolle”.

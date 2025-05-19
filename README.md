# Lima Money - Aplicativo de Controle Financeiro

## 📝 Sobre o projeto

Lima Money é uma aplicação web para controle financeiro pessoal, desenvolvida com React, TypeScript e Vite. A aplicação permite aos usuários registrar e acompanhar suas transações financeiras, categorizando-as como entradas (income) ou saídas (outcome), fornecendo uma visão clara de suas finanças.

## ✨ Funcionalidades

- **Dashboard de resumo financeiro**: Visualize rapidamente seu saldo atual, entradas e saídas
- **Listagem de transações**: Veja todas as suas transações com detalhes como descrição, valor, categoria e data
- **Adicionar transação**: Registre novas entradas e saídas com descrição, valor e categoria
- **Buscar transação**: Filtre suas transações por termos específicos
- **Excluir transação**: Remova transações indesejadas ou incorretas
- **Interface responsiva**: Experiência adequada em diferentes tamanhos de tela

## 🛠️ Tecnologias utilizadas

- **[React](https://reactjs.org/)**: Biblioteca para construção da interface
- **[TypeScript](https://www.typescriptlang.org/)**: Linguagem tipada baseada em JavaScript
- **[Vite](https://vitejs.dev/)**: Build tool e dev server
- **[Styled Components](https://styled-components.com/)**: Estilização com CSS-in-JS
- **[React Hook Form](https://react-hook-form.com/)**: Gerenciamento de formulários
- **[Zod](https://zod.dev/)**: Validação de dados e esquemas
- **[Axios](https://axios-http.com/)**: Cliente HTTP para requisições à API
- **[Radix UI](https://www.radix-ui.com/)**: Componentes acessíveis e sem estilo
- **[Phosphor Icons](https://phosphoricons.com/)**: Biblioteca de ícones

## 🧩 Estrutura do projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Header/           # Cabeçalho da aplicação
│   ├── NewTransactionModal/ # Modal para criação de transações
│   └── Summary/          # Resumo financeiro
├── context/
│   └── TransactionsContext.tsx # Contexto de gerenciamento de transações
├── lib/
│   └── axios.ts          # Configuração do cliente Axios
├── pages/
│   └── Transactions/     # Página principal de transações
│       ├── components/   # Componentes específicos da página
│       │   └── SearchForm/ # Formulário de busca
│       ├── index.tsx     # Componente principal da página
│       └── styles.ts     # Estilos da página
└── utils/
    └── formatter.ts      # Formatadores para valores e datas
```

## 🚀 Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+ recomendado)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/limamoney.git
cd limamoney
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Inicie o servidor JSON para simular a API:

```bash
npm run json-server
# ou
yarn json-server
```

4. Em outro terminal, inicie a aplicação:

```bash
npm run dev
# ou
yarn dev
```

5. Acesse a aplicação em http://localhost:5173

## 📱 Screenshots

![Dashboard]()
<a src="https://i.imgur.com/kkt4Wcw.png">
![Transações](https://imgur.com/kkt4Wcw)
![Nova Transação](/screenshots/new-transaction.png)

## 🧪 Testes

```bash
npm run test
# ou
yarn test
```

## 👨‍💻 Autor

Projeto da trilha de React da Rockeseat

Desenvolvido com 💙 e muito ☕

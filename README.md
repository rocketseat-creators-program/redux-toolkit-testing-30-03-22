<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

## Testes com Redux Toolkit

Nesta aula, vamos aprender como testar o nosso aplicativo com Redux Toolkit,
para isso vamos criar juntos uma aplicação ao estilo airbnb, com uma listagem
e filtragem de dados, dai vamos aprender sobre filosofia de testes e como
como testar o nosso aplicativo passo a passo!



## Primeiros passos 🏁

Clone o repositório.

```sh
git@github.com:rocketseat-experts-club/redux-toolkit-testing-30-03-22.git
redux-toolkit-testing
```

`cd` no diretório.

```sh
cd redux-toolkit-testing
```

Instale as dependências do projeto:

```sh
yarn install
```

Por ultimo vamos iniciar o servidor:

```sh
yarn start
```

obs pra esse projeto nos estamos utilizando JSON api para simular o backend,
para iniciar o servidor, vamos utilizar o comando:

Inicie o servidor de desenvolvimento:

```sh
yarn start:server
```

com isso vamos ter acesso ao nosso servidor que esta rodando na porta
3001, para testar o nosso aplicativo

Finalmente, vá para [localhost: 3000](http://localhost:3000) no navegador de sua escolha e você está pronto para ir 🚀.


## Ferramentas 🧰

- [x] Jest: Um framework de testes para JavaScript.
- [x] React Testing Library: Um framework de testes para React.
- [x] Redux Toolkit como framework de fluxo de dados
- [x] React como uma linguagem de IU
- [x] Redux como gerenciador de estado
- [x] TailwindCss UI como nosso kit de ferramentas de design

## Estrutura do Projeto 🏗

```sh
src
├── App.tsx (componente principal)
├── app (arquivo de configuração)
│   ├── hooks.ts
│   └── store.ts
├── components (componentes reutilizáveis)
│   ├── HeartIcon.tsx
│   ├── Map.tsx
│   ├── Search.tsx
│   └── SearchIcon.tsx
├── features (módulos)
│   └── home
├── images
│   └── GoogleMapTA.webp
├── index.css
├── index.tsx
├── mocks (mocks de dados para testes)
│   └── results.ts
├── react-app-env.d.ts
├── serviceWorker.ts
├── setupTests.ts
└── test-utils.jsx  (utilidades para testes)
```

## Expert

| [<img src="https://avatars.githubusercontent.com/u/7741167?s=460&u=41e738d1178fcf31656665fe34c1c490d9c271cb&v=4" width="75px;"/>](https://github.com/vitormalencar) |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                          [Vitor Alencar](https://github.com/vitormalencar)                                                          |

## Licença

Projetado com ♥ por [vitormalencar](https://vitormalencar.com). Licenciado sob a [Licença MIT](licença).

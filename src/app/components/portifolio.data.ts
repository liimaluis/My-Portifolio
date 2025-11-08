export interface Portifolio {
  nome: string;
  imagem: string;
  descricao: string;
  github: string;
}

export const MYPORTIFOLIO: Portifolio[] = [
  {
    nome: 'CleanArchMvc',
    imagem: 'assets/imgs/apicleanarch.jpeg',
    descricao: `O CleanArchMvc é uma aplicação desenvolvida em C# utilizando ASP.NET Core que implementa os princípios da Clean Architecture e do SOLID com a arquitetura MVC.
    O projeto contém uma versão visual do site, permitindo gerenciar categorias e produtos, além de uma API REST segura com token JWT.`,
    github: 'https://github.com/liimaluis/Clean-Architecture'
  },
  {
    nome: 'Projeto Performance',
    imagem: 'assets/imgs/projetopeformance.jpeg',
    descricao: `Um dos meus primeiros projetos freelancers: uma página web com front-end em React,
    integrada a uma API Node.js com banco de dados não relacional, utilizada para envio e armazenamento de dados via formulário.`,
    github: 'https://github.com/liimaluis/Performance'
  },
  {
    nome: 'API e-commerce',
    imagem: 'assets/imgs/apinode.png',
    descricao: `API feita para e-commerce com rotas autenticadas via JWT.
    Utiliza Node.js e banco de dados MySQL rodando em container Docker.`,
    github: 'https://github.com/liimaluis/API-REST'
  }
];

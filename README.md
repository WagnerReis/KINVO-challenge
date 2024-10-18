<<<<<<< HEAD
> ![Logo Kinvo](https://github.com/cbfranca/kinvo-front-end-test/blob/master/logo.svg)


# Kinvo - Desafio Back-end

## Instruções

- Utilize Typescript com Node;
- Desenvolva uma API REST ou GraphQL;
- Fique à vontade para escolher as libs, arquitetura, frameworks, banco de dados e etc.;
- Crie um arquivo README com instruções para executar seu projeto;
- Crie a collection do Insomnia ou Postman, salve com o nome "collection".

## Contexto

Um estudante a fim de poupar gastos e controlar suas finanças pessoais resolveu desenvolver um aplicativo para lhe ajudar nessa missão. Após um estudo de caso ele mapeou as seguintes funcionalidades:

- Criação da movimentação (receitas e despesas);
- Atualização da movimentação;
- Exclusão da movimentação;
- Listagem de movimentações;
- Exibição do saldo.

## Requisitos

### Desenvolvedor Júnior

- Filtro na listagem de movimentações por data (data inicial e data final);
- Paginação na listagem de movimentações.

### Desenvolvedor Pleno

- Todos os requisitos do Júnior;
- API Rest semântica (se escolheu desenvolver uma API Rest);
- Arquitetura minimamente escalável;
- Cobertura mínima de testes automatizados.

### Desenvolvedor Sênior

- Todos os requisitos do Pleno;
- Autenticação:
  - Cadastro de usuário;
  - Login;
  - Necessidade do usuário estar autenticado para a realização das atividades citadas no contexto.
- Dockerizar a aplicação;
- Boas práticas de POO (Exemplos: SOLID, Design Patterns, etc.).

### Diferenciais

- Cache;
- Segurança da aplicação;
- Deploy.

## Dicas

- Se optar por uma API REST, tenha cuidado ao definir as rotas e verbos HTTP: faça uso de boas práticas;
- Crie uma aplicação flexível, ou seja, que seja fácil incluir novas funcionalidades;
- Clean Code: o código deve ser fácil de entender;
- Atente-se a boas práticas de versionamento.

## Processo de submissão

1. Faça o fork deste repositório;
2. Faça seu projeto neste fork;
3. Suba as alterações para o seu fork;
4. Submeta uma PR para este repositório.

## Observações:

* O cumprimento dos requisitos solicitados para uma vaga em determinado nível não é garantia de aprovação. <strong>Focamos em avaliar a forma como os requisitos foram cumpridos.</strong>
* Apesar da listagem de requisitos mínimos acima, caso não tenha tido tempo suficiente ou tenha se esbarrado em alguma dificuldade, entregue o desafio ainda que incompleto e conte-nos na descrição do pull request quais foram as suas maiores dificuldades. Não se preocupe, avaliaremos ainda assim! :)
* Está com alguma dificuldade, encontrou algum problema no desafio ou tem alguma sugestão pra gente? Crie uma issue e descreva o que achar necessário ou entre em contato.

### Boa sorte! 🍀
=======
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
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
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

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
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
>>>>>>> 91859d5 (feat: init project)

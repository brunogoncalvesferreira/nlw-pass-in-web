<h1 align="center">NLW UNITE pass i web</h1>

> Trilha React da NLW Unite

<p align="center">
  <a href="#especificacao">Especificações</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technology">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Rodar projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000" />
</p>

<h2 id="especificacao">Especificações</h2>

O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará um scan da credencial do participante para permitir a entrada no evento.

## Requisitos

### Requisitos funcionais

- [ ]  O organizador deve poder cadastrar um novo evento;
- [ ]  O organizador deve poder visualizar dados de um evento;
- [ ]  O organizador deve poser visualizar a lista de participantes;
- [ ]  O participante deve poder se inscrever em um evento;
- [ ]  O participante deve poder visualizar seu crachá de inscrição;
- [ ]  O participante deve poder realizar check-in no evento;

### Regras de negócio

- [ ]  O participante só pode se inscrever em um evento uma única vez;
- [ ]  O participante só pode se inscrever em eventos com vagas disponíveis;
- [ ]  O participante só pode realizar check-in em um evento uma única vez;

### Requisitos não-funcionais

- [ ]  O check-in no evento será realizado através de um QRCode;

<h2 id="technology"> Tecnologias</h2>

Abaixo as tecnologias que utilizamos para o desenvolvimento do projeto:

> Frontend
 - React
 - Typescript
 - Tailwind CSS
 - Lucide React Icons

<h2 id="usage">Rodar projeto</h2>

Para rodar o projeto localmente, precisamos ter o `Node.js` e o `npm` instalados.

Siga o passo a passo:
> git clone
```
$ git clone https://github.com/brunogoncalvesferreira/nlw-pass-in-web.git
```

> Acesse a pasta
```
$ cd nlw-pass-in-web
```
> Instale as dependências
```
$ npm install
```
> Inciar o frontend 
```
$ npm run dev
```
<h2 id="license"> Licença</h2>

Este projeto está sob a licença MIT.

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/bruno-goncalves-ferreira/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="mailto:brunogoncalveferreira@outlook.com"><img src="https://img.shields.io/badge/-Outlook-%23333?style=for-the-badge&logo=outlook&logoColor=blue" style="margin-right: 2vw" target="_blank"></a> 
  <a href="https://www.instagram.com/brunogonferreira/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>

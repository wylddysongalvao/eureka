<p align="center">
  <img src="https://user-images.githubusercontent.com/32370873/148723091-7533f38b-502b-4cde-86e2-3be71800870c.png">
</p>

![Captura de tela 2022-01-09 182044](https://user-images.githubusercontent.com/32370873/148721790-6605f5c6-8ceb-4bd9-9579-e2a8a73c9ebf.png)
![Captura de tela 2022-01-09 182552](https://user-images.githubusercontent.com/32370873/148721794-b58d84ff-7147-4052-b7e8-10a98ce25af6.png)
![Group 33](https://user-images.githubusercontent.com/32370873/148723303-1167512d-1832-409f-8844-f83d5c739a38.png)

## Introdução

Eureka consulta cep é um aplicativo para consultar endereços através do cep informado. Você pode testa a demo clicando aqui [Consulta CEP](https://eurekaconsultacep.herokuapp.com/). Está é uma aplicação que utiliza a API desenvolvida para este projeto. A API desenvolvida tem integração com a api da [ViaCep](https://viacep.com.br/), caso o cep nunca tenha sido utilizado a API irá realizar a consulta no ViaCep e irá armazenar as informações no banco de dados MongoDB.

## Techs
- **React**
- **Styled-components**
- **axios**

Instalação
```bash
git clone git@github.com:wylddysongalvao/eureka.git
cd eureka
npm i
```
Rodando localmente
```bash
npm run start
```
Logo após acesse [http://localhost:3000](http://localhost:3000) para ver em seu navegador.

Criando a build para deploy

```bash
npm run build
```

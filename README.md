# LogLife-API

## Overview

### O teste    
Criação de uma aplicação BACKEND utilizando NODEJS
- Criar servidor utilizando o EXPRESS para efetuar um CRUD das informações na tabela CLIENTE  
- Criar um middleware para autenticar as rotas  

Rotas para serem consumidas:
* Rota para receber as informações de todos clientes
* Rota para receber as informações de um único cliente
* Rota para enviar as informações de um único cliente
* Rota para atualizar as informações de um único cliente
* Rota para remover as informações de um único cliente

### Como utilizar a API:  
  
  
1 - Primeiramente faça o clone deste repositório para a sua máquina  

2 - Rode no terminal o comando `npm install` que instalará automaticamente todas as dependências necessárias para rodar a API e depois rode o comando `npm start` para iniciar.  

3 - Cadastre um usúario utilizando o método POST na rota:  

> YOUR-HOST:4040/todos/users/sign-up

passando no corpo com formato raw JSON:  
```
 {   
  "email": "EMAIL@EXEMPLO.COM",  
  "password": "EXEMPLO-DE-SENHA"    
}
```
  
4 - Realize o LOGIN com o método POST na rota:  

> YOUR-HOST:4040/users/sign-in  

Insira os dados criados no passo anterior  
 ```
 {   
  "email": "EMAIL@EXEMPLO.COM",  
  "password": "EXEMPLO-DE-SENHA"    
}
```
 
5 - Ao fazer o login, será retornado um Bearer Token, utilize-o para fazer a autenticação das próximas rotas 

6 - Com o Bearer Token adicionado, cadastre um novo cliente utilizando o método POST para a rota:  

> YOUR-HOST:4040/clients

Envie os dados do cliente com a seguinte estrutura:  
  
  ```
  {       
    "client_type": " ",
    "client_status": " ",
    "name": " ",
    "last_name": " ",
    "cpf": " ",
    "email": " ",
    "phone": " ",
    "cep": " ",
    "address": " ",
    "number": " ",
    "city": " ",
    "state": " ",
    "opening_hour": " ",
    "day_of_service": " ",
    "vehicles": " "
}
```
  
7 - Para listar todos os clientes cadastrados utilize o método GET na rota:  

> YOUR-HOST:4040/clients  

8 - Para listar os dados de um cliente específico, utilize o método GET na rota abaixo, passando o ID no corpo da requisição como no exemplo abaixo:
> YOUR-HOST:4040/clients/id 

 ```
 {   
  "id": "1",  
      
}
```


9 - Para editar/atualizar um cliente cadastrado, utilize a seguinte o método PATCH na rota:  

> YOUR-HOST:4040/clients  

Lembre-se de passar o ID do cliente que você estará atualizando, conforme o exemplo abaixo:  
```
  {
    "id": "1",
    "client_type": " ",
    "client_status": " ",
    "name": " ",
    "last_name": " ",
    "cpf": " ",
    "email": " ",
    "phone": " ",
    "cep": " ",
    "address": " ",
    "number": " ",
    "city": " ",
    "state": " ",
    "opening_hour": " ",
    "day_of_service": " ",
    "vehicles": " "
}
```
10 - Para deletar um cliente da base de dados utilize o método DELETE na seguinte rota:  

 > YOUR-HOST:4040/clients

Basta passar o ID do cliente que deseja excluir conforme o exemplo:  

 ```
 {   
  "id": "1"      
}
```

### Links
[Linkedin:] (https://www.linkedin.com/in/lucasaclima03/)

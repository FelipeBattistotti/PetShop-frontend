
<p align="center">
  <img alt="PetShop" src=".github/petshop_icon.png">
</p>

# Project

<strong>Pet Shop - Web App</strong>

This project aims to present a Web Application that will allow the consultation and maintenance of products from a Pet Shop online store.

<br/>

# Stack

- [Node.js](https://nodejs.org/en)
- [React](https://reactjs.org)

<br/>

# Backend

Developed with: <strong>Node.js</strong>
<br/>
<br/>

To Install: <strong>npm install</strong>
<br/>
To Execute: <strong>npm start</strong>
<br/>

Test URL Examples (Heroku):
<br/>
<strong>Login</strong> https://petshop-webapp-b.herokuapp.com/login
<br/>
<strong>GET user</strong> https://petshop-webapp-b.herokuapp.com/user
<br/>
<br/>
<strong>POST user</strong> https://petshop-webapp-b.herokuapp.com/user
<br/>
JSON Example --> {"name": "Usuário 1","email": "nome@email.com","pwd": "abc123"}
<br/>
<br/>
<strong>GET product</strong> https://petshop-webapp-b.herokuapp.com/product
<br/>
<strong>GET product (Query Parameters: page)</strong> https://petshop-webapp-b.herokuapp.com/product?page=1
<br/>
<strong>GET product (Query Parameters: page & name)</strong> https://petshop-webapp-b.herokuapp.com/product?page=1&name=nameProduct
<br/>
<strong>GET product (Query Parameters: page & name & description)</strong> https://petshop-webapp-b.herokuapp.com/product?page=1&name=nameProduct&description=descriptionProduct
<br/>
<strong>GET product (Query Parameters: page & name & description & category)</strong> https://petshop-webapp-b.herokuapp.com/product?page=1&name=nameProduct&description=descriptionProduct&category=categoryProduct
<br/>
<br/>
<strong>POST product</strong> https://petshop-webapp-b.herokuapp.com/product
<br/>
<strong>JSON Example --> </strong> Content: {"name": "Coleira","description": "Coleira p/ Cachorro","category": "Acessórios","price": "55.66","stock_quantity": "9"}; (Header: Authorization - Value: (ID user))
<br/>
<br/>
<strong>DELETE product</strong> https://petshop-webapp-b.herokuapp.com/product/1
<br/>
(Header: Authorization - Value: (ID user))

<br/>
<strong>-- See JSON Files --</strong>

<br/>

# Frontend

Developed with: <strong>React</strong>
<br/>
<br/>

To Install: <strong>npm install</strong>
<br/>
To Execute: <strong>npm start</strong>
<br/>
<br/>

- External link Web App: [https://petshop-webapp-f.herokuapp.com](https://petshop-webapp-f.herokuapp.com)
<br/>

Snapshots:

<p align="center">
  <img alt="Snapshot1" src=".github/snapshot1.png">
  <img alt="Snapshot2" src=".github/snapshot2.png">
</p>
 
<p align="center">
  <img alt="Snapshot3" src=".github/snapshot3.png">
  <img alt="Snapshot4" src=".github/snapshot4.png">
</p>

<br/>

# Videos

- [Pet Shop - Web App (Backend) - Parte 1](https://youtu.be/K7iKAAvOhL4)
- [Pet Shop - Web App (Backend) - Parte 2](https://youtu.be/iY7X5dLG4xE)
- [Pet Shop - Web App (Frontend)](https://youtu.be/H3SMJeNr58M)
- [Pet Shop - Web App (Demo)](https://youtu.be/5HedMW7Hzrw)

<br/>

# JSON Files

- [Insomnia JSON - Localhost](https://drive.google.com/file/d/1Cs2xnDOyUVIrRHF9LUHwk0YhhZX_C-EQ/view?usp=sharing)
- [Insomnia JSON - Heroku](https://drive.google.com/file/d/1OGNx17yfXoh9AvmVhP4jX2TFlogDBBvK/view?usp=sharing)

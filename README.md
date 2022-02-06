# E-commerce Back End Starter Code

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Technologies](#technologies)
- [Video](#video)

## Description

This application uses back-end technology to store, add, update and delete data. This example uses an online store with products that can have corresponding categories and tags which in turn creates a unique product tag.


## Installation

1. Clone repository to your desired folder
2. Use command line to download packages: <code>npm i</code>
3. Create a file named <code>.env</code> and insert your mysql password and username as such:
    - <code>DB_NAME='ecommerce_db'</code>
    - <code>DB_USER='your username here'</code>
    - <code>DB_PW='your password here'</code>
4. Login into your mysql using: <code>mysql -u root -p</code>
5. Initialize the database with these commands:
    - <code>SOURCE db/schema.sql;</code>
    - <code>USE ecommerce_db;</code>
6. Leave the mysql command line and populate the database with this command in the bash:
    - <code>npm run seed</code>
7. To start the application type: <code>npm start</code>

## Technologies

- dotenv
- Express
- MySQL2
- sequelize
- Insomnia (for testing routes)

## Video

![Video](assets/backup-my-money-video.gif)
# TodoList with MySQL Database

This repository contains a simple TodoList application developed using Node.js, Express, and MySQL. 
Follow the steps below to set up the SQL database, configure the project, and run the application.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js: Download and Install Node.js from https://nodejs.org/
- MySQL Workbench: Download and Install MySQL Workbench from https://www.mysql.com/products/workbench/
- Visual Studio Code (or any preferred code editor): Download and Install Visual Studio Code from https://code.visualstudio.com/

## Setting up the SQL Database

1. Open MySQL Workbench and create a new database.
2. create a table with values……etc
3. Modify db.js following your Database's user, password and database name.


Run :
    >> npx nodemon server.js
    (while inside the correct folder !)

Beware :
if ERROR 1251 : run in any query file in mysql : "ALTER USER 'root'@'localhost' IDENTIFIED WITH 'mysql_native_password' BY 'root';"
!!! 'root'  @  'localhost'   //@ not in ' ' !!



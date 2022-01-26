# Database and MongoDB

## What is a database (DB)?

- A database is an organized collection of data stored and accessed electronically.

## What is a database management system (DBMS)?

- This is a software system that enables users to define, create, maintain, and control access to the database.

## What are some types of databases?

- 5 common types
  - 1. Hierarchial databases
  - 2. Network databases
  - 3. Object-oriented databases
  - 4. Relational databases
  - 5. NoSQL databases

### Hierarchical DBs

- Follow a progression of data categorized by rank or level.
  - example: military ranks, university branched into depts and admin, then
    students and faculties, etc.
- Top-down tree-like data structure with relationships going strictly from parent to child.

### Network DBs

- The child records/data are given the freedom to associate with multiple parent records/data.

### Object-oriented DBs

- Capable of being represented as an object that serves as an instance of the database model.
- Each object in the database has attributes that detail the types of data a data object would have. Objects in the object-oriented db are linked to one another using obj methods.

### Relational DBs

- These are EVERYWHERE.
- Most mature of all the DB types.
- Tabulate data; management system works on creating records that are part of tables.
- There are a bunch of different tables with data and all of the tables are RELATED to each other. Every row in the DB can be linked to another row.
- SQL (Structured Query Language): used in programming to manage these relational DBs.

### NoSQL DBs

- Not relational
- Provides a different mechanism for storing and retrieving data (similar to obj-oriented)
- Data structures used by NoSQL Dbs are typically mapped to data structures that already exist in multiple programming languages.

## Examples of SQL DBs vs NoSQL DBS

### SQL DBs

- Oracle
- MySQL
- Microsoft SQL Server
- PostgreSQL

### NoSQL DBs

- MongoDB (document based)
- DynamoDB (Amazon product; key-value pairing)
- Cassandra (Reddit; wide column format)
- Amazon Neptune (graph DB)

## MongoDB; WTF is it????

- Document-based NoSQL DB
- It uses JSON-like documents with optional schemas to help define how documents of different types are formatted.
- Not all documents need to have all the same fields present for the DB to work.
- "Schema" refers to an organizational blueprint of how a DB and its collections are put together.
- Each data entry is a document
-

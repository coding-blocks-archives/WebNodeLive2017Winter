# Preparing the Database

Do the following as root

```sql
 create database shopdb;
 create user shopper identified by 'shoppass';
 use shopdb;
 grant all privileges on shopdb to shopper;
 grant all privileges on shopdb.* to shopper;
```
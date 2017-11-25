# Using MySQL

## Start MySQL Service

### Windows

Start the MySQL service (from Task Manager)

### Linux 

```shell
sudo service mysql start
```

### MacOS

Go to Settings > Mysql > Start MySQL Service 

or (if installed via Homebrew)

```shell
mysqld.service start
```

## Log in to MySQL as root

Without root password - 

```shell
mysql -u root
mysql> 
```

With root password - 

```shell
mysql -u root -p 
Enter Password: 

mysql> 
```

## Create DB, User, Grant access

```sql
CREATE DATABASE mytestdb;

CREATE USER myuser IDENTIFIED BY 'mypass';

USE mytestdb;

GRANT ALL PRIVILEGES ON mytestdb.* TO myuser;

FLUSH PRIVILEGES;
```

## Login using the new user

```shell
mysql -u myuser -p
Enter Password: (enter 'mypass' here)

mysql>
```
# CPMS
community property management system

To install dependencies, do:

```
npm install -g cpms
npm start
```

If permission denial error, then https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules.

To create tables in the database, go to the backend/db package,
Edit MySQLTableCreation to add new tables to the AWS database (use IntelliJ extension to show MySQL db)
```
javac MySQLDBUtil.java MySQLTableCreation.java
java MySQLTableCreation
```

# CPMS
community property management system

To install dependencies, go inside the cpms(front-end folder), and do:

```
npm install -g cpms
npm start
```

If permission denial error, then https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules.

if getting this error: "? Something is already running on port 3000. Probably: ..." See:
https://stackoverflow.com/questions/39322089/node-js-port-3000-already-in-use-but-it-actually-isnt


To create tables in the database, go to the backend/db package,
edit MySQLTableCreation to add new tables to the AWS database (use IntelliJ extension to show MySQL db)
```
javac MySQLDBUtil.java MySQLTableCreation.java
java MySQLTableCreation
```

Available Endpoints:
localhost:3000/login
localhost:3000/resident/...
localhost:3000/admin/...


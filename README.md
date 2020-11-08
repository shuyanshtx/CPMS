# CPMS
## Community Property Management System

### How to install React & ant-design dependencies?

Go inside the frontend folder, and do:

```
npm install -g cpms
```

If permission denial error, then https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules.

if getting this error: "? Something is already running on port 3000. Probably: ..." See how to kill a process at a port:
https://stackoverflow.com/questions/39322089/node-js-port-3000-already-in-use-but-it-actually-isnt

### Then, run the app inside the frontend folder:

```
npm start (or: sudo npm start)
```

Go to http://localhost:3000/ to see the current endpoints [ implemented with React Router, see App.js for details ]:

```
localhost:3000/login
localhost:3000/resident/(...) 
localhost:3000/admin/(...)
(...) -> click different tabs on the page to get to the different sub-endpoints
```


### How to create tables in the AWS MySQL database?

First, configure IntelliJ Data Source:
```
File ==> New ==> Data Source ==> MySQL
Type in AWS DB Connection Info in DBUtil
```
Next, Go to the backend/db package,
edit MySQLTableCreation, and run the main function again to add new tables to the AWS database. Otherwise, type the commands below manually:
```
javac MySQLDBUtil.java MySQLTableCreation.java
java MySQLTableCreation
```
Again, if using IntelliJ, this can easily be done clicking the "run" button.

#### P.S. target/* and src/* are folders containing the dependencies for the backend for ease of running the API.

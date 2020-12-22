# CPMS
## Community Property Management System

### How to install React & ant-design dependencies?

Go inside the frontend folder, and do:

```
npm install
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


### How to create tables or logics to support APIs in the AWS MySQL database?

First, configure IntelliJ Data Source:
```
File ==> New ==> Data Source ==> MySQL
Type in AWS DB Connection Info in DBUtil
```
Next, edit configurations ("the little hammer")
```
Add configuration "+" sign ==> Tomcat Server -> local
==> configure Application Server to be where the Tomcat is located
==> untick "After launch"
==> "Fix" ==> "CPMS:war_exploded"
==> Apply ==> OK
```

For now, to test the API, send a POST request to http://localhost:8080/CPMS_war_exploded/login in Postman.
We should have these results:
```
{
    "user_id": "1",
    "first_name": "John",
    "last_name": "Smith",
    "unit_num": "101",
    "email": "johnsmith101@gmail.com",
    "phone": "0123456789",
    "user_type": "resident",
    "status": "OK"
}
```

To create new tables, go to the backend/db package,
edit MySQLTableCreation, and run the main function again to add new tables to the AWS database. Otherwise, type the commands below manually:
```
javac MySQLDBUtil.java MySQLTableCreation.java
java MySQLTableCreation
```
Again, if using IntelliJ, this can easily be done clicking the "run" button.

#### P.S. target/* and src/* are folders containing the dependencies for the backend for ease of running the API. To test the API, remember to configure Tomcat Local ia "fix" to be CPMS:war_exploded.

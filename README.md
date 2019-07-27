# loan-management-app

==========

db.loans.find({"verification_status":"Verified"}).sort({"loan_amnt":-1}).limit(10)
db.loans.find({"issue_d":/.*m.*/}).sort({"int_rate":-1}).limit(10)

Post.find({}).sort('test').exec(function(err, docs) { ... });


==========

## Tech Stack used - Angular, Express, Mongo

## Steps to build the project-

 - extract the archieve and 'cd' into it.
 - mongoimport -d mydb -c loans --type csv --file loan_part.csv --headerline   ( import the dump file provided that mongodb is installed)
 - mongod --dbpath ./data/db  ( run database server )
 - cd defaultfront
 - npm install
 - ng serve
 - cd ../apiservices
 - npm install
 - node app.js
 - open localhost:4200 in browser

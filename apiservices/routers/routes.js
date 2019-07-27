var express = require('express');
var Loan = require('../models/loan');

var Router = express.Router();
Router.route('/loandetails').get(function (request, response) {

  console.log('GET /loandetails');

    Loan.find(function (error, loans) {

    if (error) {
      response.status(500).send(error);
      return;
    }
    response.json(loans);
  });
});
Router
  .route('/member/:memId')
  .get(function (request, response) {

    console.log('GET /member/:Id');

    var memId = request.params.memId;

    Loan.findOne({ member_id: memId }, function (error, member) {

      if (error) {
        response.status(500).send(error);
        return;
      }


      response.json(member);

    });
  })

Router
  .route('/maxverified')
  .get(function (request, response) {

    console.log('top 10 verified .....');

    Loan.find({"verification_status":/^Verified.*/ }).sort({"loan_amnt":-1}).limit(10).exec(function(err,data){
      if (err) {
        response.status(500).send(error);
        return;
      }
      response.json(data);

    });
  })

Router
  .route('/maxnotverified')
  .get(function (request, response) {

    console.log('top 10 not verified .....');

    Loan.find({"verification_status":"Not Verified"}).sort({"loan_amnt":-1}).limit(10).exec(function(err,data){
      if (err) {
        response.status(500).send(error);
        return;
      }
      response.json(data);

    });
  })
  Router
  .route('/intgraph/:year')
  .get(function (request, response) {
    var year = request.params.year;
    console.log('Int graph');
    var testVar = year.substring(year.length - 4,year.length);
   
    Loan.find({"issue_d":new RegExp(year)}).sort({"int_rate":-1}).limit(10).exec(function(err,data){
      if (err) {
        response.status(500).send(error);
        return;
      }
      response.json(data);

    });
  })
module.exports = Router;
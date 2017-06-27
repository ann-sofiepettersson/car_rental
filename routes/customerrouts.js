const router = require('express').Router();


module.exports = (Customer) => {

    //Get all customers  
    /*  router.get('/customer', (req, res, next) => {
          Customer.find({}, (error, results) => {
              if(error) {
                  res.send(error);
              } else {
                  // res.render('/customer')
                  res.json(results);
                  console.log(results);
              }
          });
      });*/

    //Add customer
    router.post('/customer', (req, res) => {

        let customer = new Customer(req.body);

        customer.save({}, (error, results) => {
            if(error) {
                res.send(error);
            } else {
                res.render('confirmation')
                    //res.send(results);
                console.log(results);
            }
        });
    });

    router.get('/customer/:id', (req, res) => {
        Customer.findById(req.params.id, (error, results) => {
            if(error) {
                res.send(error);
            } else {
                res.send(results);
            }
        });
    });

    router.delete('/customer/:id', (req, res) => {
        Customer.findByIdAndRemove(req.params.id, (error, results) => {
            if(error) {
                res.send(error);
            } else {
                res.send('Successfully removed!');
            }
        });
    });

    router.patch('/customer/:id', (req, res) => {
        customermodel.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                surname: req.body.surname,
                address: req.body.address
            }, { new: true },
            (error, results) => {
                if(error) res.send(error);
                // res.send(results);
                res.json(results);
            });
    });
    return router;
};
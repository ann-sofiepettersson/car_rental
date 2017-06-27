const router = require('express').Router();


module.exports = (Car) => {



    //Get all available cars
    router.get('/carlist', (req, res) => {
        Car.find({}, (error, results) => {
            if(error) {
                res.send(error);
            } else {
                //res.json(results);
                //res.send(results);
                console.log('Success!');
                res.render('carlist', { cars: results });
            }
        });
    });

    //Add dates to car document when choosing a car
    //Not ready
    router.patch('/carlist/:id', (req, res) => {
        Car.findByIdAndUpdate(req.params.id, {
                from: req.body.from,
                to: req.body.to
            },
            (error, results) => {
                if(error) res.send(error);
                res.send(results);
                res.render('customerform');
            });
    });



    ////////////ADMIN///////////


    // Get cars on admin page
    router.get('/admincarlist', (req, res) => {
        Car.find({}, (error, results) => {
            if(error) {
                res.send(error);
            } else {
                //res.json(results);
                //res.send(results);
                console.log('Carlist is displayed properly!');
                res.render('admincarlist', { cars: results });
            }
        });
    });




    //Add new car
    router.post('/adminaddcar', (req, res) => {

        let car = new Car(req.body);

        car.save((error, results) => {
            if(error) {
                res.send(error);
            } else {
                //res.json(results);
                //res.send(results);
                res.redirect('admincarlist');
                console.log(results);
            }
        });
    });

    //Remove a car
    //Not ready
    router.get('/removecar/:id', (req, res) => {
        Car.findByIdAndRemove(req.params.id, (error, results) => {
            if(error) {
                res.send(error);
            } else {
                //res.json(results);
                res.send('Successfully removed!');
                //res.render('');
                console.log(results);
            }
        });
    });




    //Edit car
    //Not ready
    router.patch('/admineditcar/:id', (req, res) => {
        Car.findByIdAndUpdate(req.params.id, {
                brand: req.body.brand,
                model: req.body.model,
                year: req.body.year,
                regnr: req.body.regnr,
                roofrack: req.body.roofrack,
                gearbox: req.body.gearbox,
                seats: req.body.seats,
                price: req.body.price,
                from: req.body.from,
                to: req.body.to

            },
            (error, results) => {
                if(error) res.send(error);
                // res.send(results);
                console.log(results);
            });
    });

    return router;
};

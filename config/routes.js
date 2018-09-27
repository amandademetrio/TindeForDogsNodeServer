module.exports = function(app) {

    const dog = require('../controllers/widgets.js')

    //get all
    app.get('/dogs', function(req,res) {
        dog.index(req,res);
    });

    //post one
    app.post('/dogs', function(req,res) {
        dog.add_dog(req,res);
    });

    //Update one
    app.put('/dog/:id',function(req,res){
        dog.update_dog(req,res);
    })

    //get one
    app.get('/dogs/:id',function(req,res){
        dog.find_dog(req,res);
    })

    //delete one
    app.delete('/dogs/:id', function(req,res) {
        dog.delete_dog(req,res);
    });
}
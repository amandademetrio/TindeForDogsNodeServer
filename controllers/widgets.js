const mongoose = require('mongoose'),
    Dog = mongoose.model('Dog')

module.exports = {
    index: function(req,res) {
        Dog.find({},function(err,dogs) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'dog':dogs});
            }
        })
    },
    add_dog: function(req,res) {
        var dog = new Dog({
            name:req.body.name,
            picture:req.body.picture,
            gender:req.body.gender,
            age:req.body.age,
            breed:req.body.breed,
            size:req.body.size,
            health:req.body.health,
            adoption_fee:req.body.adoption_fee,
            description:req.body.description,
            lat:req.body.lat,
            long:req.body.long,
            email:req.body.email,
            phone:req.body.phone
            })
        dog.save(function(err,dog){
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'dog':dog});
            }
        })
    },
    update_dog: function(req,res) {
        Dog.update({_id:req.params.id},{$set: 
            {
            name:req.body.name,
            picture:req.body.picture,
            gender:req.body.gender,
            age:req.body.age,
            breed:req.body.breed,
            size:req.body.size,
            health:req.body.health,
            adoption_fee:req.body.adoption_fee,
            description:req.body.description,
            lat:req.body.lat,
            long:req.body.long,
            email:req.body.email,
            phone:req.body.phone
            },
        },
        {runValidators: true},
        function(err){
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'dog':'Dog was updated'});
            }
        })
    },
    delete_dog: function(req,res) {
        Dog.deleteOne({_id:req.params.id},function(err) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'dog':'Dog was deleted'});
            }
        })
    },
    find_widget: function(req,res) {
        Dog.findById(req.params.id,function(err,dog) {
            if (err) {
                res.json({'status':500,'errors':err})
            }
            else {
                res.json({'status':200,'dog':dog});
            }
        })
    }
}

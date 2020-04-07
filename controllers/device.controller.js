const Device = require('../models/device.model');


exports.addDevice = function (req,res) {
    // console.log(req.body);
    const { name, properties, categoryId } = req.body;
    if (!name || !properties || !categoryId || !(typeof properties === "object")) {
        return res.send({
            error: true,
            result: "Invalid params",
        })
    }
    const device = new Device ({
        name,
        properties,
        categoryId,
        id: Date.now() + Math.ceil(Math.random(0,1)*100) + "", // creating an id to have a unique identifier by adding date.now() and a random number
    });
    device.save(error => {
        if(error) {
            return res.send({
                error: true,
                result: error,
            });
        }
        return res.send({
            error: false,
            result: `Device ${name} has been saved`,
        });
    });
};

exports.editDevice = function (req, res) {
    const { id, newObject } = req.body;
    if(!id || !newObject || !(typeof newObject === "object")) {
        return res.send({
            error: true,
            result: "Invalid Params"
        });
    }
    Device.updateOne({id}, {$set: newObject}, function(error, result) {
        if(error) {
            return res.send({
                error: true,
                result: error,
            });
        }
        return res.send({
            error: false,
            result,
        })
    });
};

exports.deleteDevice = function (req, res) {
    const { id } = req.query;
    if(!id) {
        return res.send({
            error: true,
            result: "Invalid Params"
        });
    }
    Device.remove({id}, function(error, result) {
        if(error) {
            return res.send({
                error: true,
                result: error
            })
        }
        return res.send({
            error: false,
            result
        })
    })
};

exports.categoryWiseDevices = function (req, res) {
    const { categoryId } = req.query;
    const query = {};
    if (categoryId) {
        query.categoryId = categoryId;
    }
    const projection = {
        name: 1,
        categoryId: 1,
        location: 1
    };
    // console.log(query);
    Device.find(query, ((error, list) => {
        // console.log("list", typeof list, list)
        if(error) {
            return res.send({
                result: error,
                error: true,
            });
        }
        return res.send({
            result: list,
            error: false,
        });
    }));
};


const Category = require('../models/category.model');
const Device = require('../models/device.model');


exports.addCategory = function (req,res) {
    // console.log(req.body);
    const { name, properties } = req.body;
    if (!name || !properties || !properties.length) {
        return res.send({
            error: true,
            result: "Invalid params",
        })
    }
    const category = new Category ({
        name,
        properties,
        id: Date.now() + Math.ceil(Math.random(0,1)*100) + "", // creating an id to have a unique identifier by adding date.now() and a random number
    });
    category.save(error => {
        // console.log(res);
        if(error) {
            return res.send({
                error: true,
                result: error,
            });
        };
        return res.send({
            error: false,
            result: `Category ${name} has been saved`,
        });
    });
};

exports.editCategory = function (req, res) {
    // console.log(req.body);
    const { id, properties } = req.body;
    if(!id || !properties || !properties.length) {
        return res.send({
            error: true,
            result: "Invalid Params"
        });
    }
    Category.updateOne({id}, {$push: {properties: {$each: properties}}}, function(error, result) {
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

exports.deleteCategory = async function (req, res) {
    // console.log(req.query);
    const { id } = req.query;
    if(!id) {
        return res.send({
            error: true,
            result: "Invalid Params"
        });
    }
    const deviceCount = await Device.count({categoryId: id});
    // console.log("deviceCount", deviceCount);
    if(!deviceCount) {
        // console.log("deviceCOunt", deviceCount);
        Category.remove({id}, function(error, result) {
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
    } else {
        return res.send({
            error: true,
            result: `Cannot delete category, we have ${deviceCount} devices in this category`
        })
    }
};

exports.listOfCategories = function (req, res) {
    Category.find({}, ((error, list) => {
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


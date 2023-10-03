
const fs = require('fs')
const path = require('path')
const Employee = require("../models/employee");
// const { log } = require('console');


const index = async (req, res) => {
    let employees = await Employee.find();
    return res.render('index', { employees })
}

const create = (req, res) => {
    return res.render('create')
}

const store = async (req, res) => {
    console.log(req.file.path);
    //    let emp = new Employee({
    //         name: req.body.name,
    //         email: req.body.email,
    //         phone: req.body.phone,
    //         address: req.body.address,
    //         salary: req.body.salary
    //     })
    //     await emp.save();

    await Employee.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        salary: req.body.salary,
        image: req.file.path.replace('public', '')
    })

    return res.redirect('/');
}
const edit = async (req, res) => {
    let id = req.params.id

    let employee = await Employee.findById(id);

    return res.render('edit', { employee });
}

const update = async (req, res) => {
    // console.log(req.body,req.params.id);
    // console.log(req.body);
    if (req.file) {
        if(fs.existsSync(path.join(__dirname, "../public", req.body.prev_path)))
         fs.unlinkSync(path.join(__dirname, "../public", req.body.prev_path));

        await Employee.updateOne({ _id: req.params.id }, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            salary: req.body.salary,
            image: req.file.path.replace('public', ' ')
        })

    } else {
        await Employee.updateOne({ _id: req.params.id }, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            salary: req.body.salary
        })

    }

    return res.redirect('/')
}

const deleteEmployee = async (req, res) => {
    await Employee.deleteOne({ _id: req.params.id })

    return res.redirect('/')
}

module.exports = {
    index,
    create,
    store,
    edit,
    update,
    deleteEmployee
}
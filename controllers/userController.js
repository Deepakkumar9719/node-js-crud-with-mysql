const User = require('../models/userModel');

module.exports = {

    index: (req, res) => {
        User.getAll((err, users) => {
            if (err) throw err;
            res.render('users/index', { users });
        });
    },

    show: (req, res) => {
        const id = req.params.id;
        User.getById(id, (err, user) => {
            if (err) throw err;
            res.render('users/show', { user: user[0] });
        });
    },

    createForm: (req, res) => {
        res.render('users/create');
    },

    create: (req, res) => {
        User.create(req.body, (err) => {
            if (err) throw err;
            res.redirect('/users');
        });
    },

    editForm: (req, res) => {
        const id = req.params.id;
        User.getById(id, (err, user) => {
            if (err) throw err;
            res.render('users/edit', { user: user[0] });
        });
    },

    update: (req, res) => {
        const id = req.params.id;
        User.update(id, req.body, (err) => {
            if (err) throw err;
            res.redirect('/users');
        });
    },

    delete: (req, res) => {
        const id = req.params.id;
        User.delete(id, (err) => {
            if (err) throw err;
            res.redirect('/users');
        });
    }
};

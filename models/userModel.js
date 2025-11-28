const db = require('../config/db');

class User {
    static getAll(callback) {
        db.query('SELECT * FROM users', callback);
    }

    static getById(id, callback) {
        db.query('SELECT * FROM users WHERE id = ?', [id], callback);
    }

    static create(data, callback) {
        db.query('INSERT INTO users (name, email, phone) VALUES (?, ?, ?)', 
        [data.name, data.email, data.phone], callback);
    }

    static update(id, data, callback) {
        db.query('UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?', 
        [data.name, data.email, data.phone, id], callback);
    }

    static delete(id, callback) {
        db.query('DELETE FROM users WHERE id = ?', [id], callback);
    }
}

module.exports = User;

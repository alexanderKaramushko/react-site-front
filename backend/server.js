// @ts-nocheck
const express = require('express');
const Sequelize = require('sequelize');
const createUserModel = require('./models/User').createModel;
const createContactModel = require('./models/Contact').createModel;

const sequelize = new Sequelize('reactdb', 'root', '', {
    define: {
        timestamps: false,
    },
    dialect: 'mysql',
    host: '192.168.0.14',
    logging: false,
});

const User = createUserModel(Sequelize, sequelize);
const Contact = createContactModel(Sequelize, sequelize);

User.hasMany(Contact);

const app = express();

// // const jsonParser = express.json();

app.get('/api/main', (req, res) => {
    User.findAll().then((users) => {
        const answer = [];
        const promises = [];
        for (let i = 0; i < users.length; i += 1) {
            answer.push({
                description: users[i].description,
                id: users[i].id,
                name: users[i].name,
            });
            promises.push(users[i].getContacts().then((c) => { answer[i].contacts = c; }));
        }

        Promise.all(promises).then(() => {
            res.send(answer);
        });
    });
});

app.listen(3000);

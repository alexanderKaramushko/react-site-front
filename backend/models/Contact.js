// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports.createModel = (Sequelize, sequelize) => sequelize.define('contact', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: {
        defaultValue: 'no name',
        type: Sequelize.STRING,
    },
    path: {
        defaultValue: 'no path',
        type: Sequelize.STRING,
    },
});

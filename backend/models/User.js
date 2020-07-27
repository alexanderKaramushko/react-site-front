// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */
module.exports.createModel = (Sequelize, sequelize) => sequelize.define('user', {
    description: {
        defaultValue: 'no description',
        type: Sequelize.STRING,
    },
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
});

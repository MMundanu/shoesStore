'use strict';

const usuarios = require('../../data/users.json')

const users = usuarios.map(({name, surname, email, password, rolId, genderId,avatar}) => {
  return{
    name,
    surname,
    email,
    password,
    rolId,
    genderId,
    avatar,
    createdAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', users, {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};

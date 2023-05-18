'use strict';

const generos = ['Masculino', 'Femenino', 'Otro'];

const genders = generos.map(gender =>{
  return{
    name: gender,
    createdAt: new Date()

  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Genders', genders, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Genders', null, {});
     
  }
};

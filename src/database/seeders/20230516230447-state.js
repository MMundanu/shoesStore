'use strict';

const estados = ['Aprobado', 'Pendiente', 'Eliminado']

const states = estados.map(state => {
  return{
    state: state,
    createdAt: new Date()
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('States',states , {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('States', null, {});
     
  }
};

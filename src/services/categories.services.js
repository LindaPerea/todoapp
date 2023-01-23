const Categories = require("../models/categories.models");

class CategoriesServices {

    // static async getAll(id) {
    //     try {
    //       const result = await Users.findOne({
    //         where: { id },
    //         attributes:[ "id" ],
    //         include:{
    //           model: Categories,
    //           as: 'categories',
    //           attributes: [ "id, name" ],
    //       }        
    //       })
    //       return result;
    //     } catch (error) {
    //       throw error;
    //     }
    //   }
}

module.exports = CategoriesServices;
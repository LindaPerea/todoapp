const Categories = require('../models/categories.models');
const Users = require('../models/users.models');

class UserServices {
    static async getAll() {
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;            
        }
    }

    static async getById(id) {
        try {
            const result = await Users.findByPk(id);
            return result;        
        } catch (error) {
            throw error;            
        }
    }

    static async getUserWhitTasks(id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: [ "username" ],
                include: {
                    model: Todos,
                    as: "task"
                },
            });
            return result;
        } catch (error) {
            throw error            
        }
    }

    static async create(user) {
        try {
            const result = await Users.create(user);
            return result;
        } catch (error) {
            throw error;            
        }
    }

    static async getUserWhitCategories(id){
        try {
            const result = await Categories.findOne({
                where: { id },
            });
            return result;
        } catch (error) {
            throw error
        }
    }
}


module.exports = UserServices;
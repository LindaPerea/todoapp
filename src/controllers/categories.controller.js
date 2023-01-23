const CategoriesServices = require('../services/categories.services');

// const getAllCategories = async(req, res) => {
//     try {
//       const {id} = req.params;
//       const result = await CategoriesServices.getAll(id);
//       res.json({
//         message: "enviando tareas con categorías",
//         data: result,
//       });
//     } catch (error) {
//         res.status(400).json({
//           error: error.message,
//           details: error.stack,
//         });
//     }
//   };

//   module.exports = { getAllCategories};


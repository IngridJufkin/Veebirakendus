//lühikesed commandid controllerile, mis lähevad rootersile
module.exports = {
  addUser: require('./addUser.controller'),
  getAllUsers: require('./getAllUsers.controller'),
  getUserDetails: require('./getUserDetails.controller'),
  getUserByEmail: require('./getUserByEmail.controller'),
  updateUser: require('./updateUser.controller'),
  loginUser: require('./loginUser.controller'),
  
  addProduct: require('./addProduct.controller'),
  deleteProduct: require('./deleteProduct.controller'),
  getAllProducts: require('./getAllProducts.controller'),
  updateProduct: require('./updateProduct.controller'),
  getProductByID: require('./getProductByID.controller'),

  addOrder: require('./addOrder.controller'),
  getAllOrders: require('./getAllOrders.controller'),
  updateOrder: require('./updateOrder.controller'),
  getOrderByID: require('./getOrderByID.controller'),
  getOrdersByDate: require('./getOrdersByDate.controller'),
  getOrdersByStatus: require('./getOrdersByStatus.controller'),
  updateOrderProduct: require('./updateOrderProduct.controller'),

  addBonus: require('./addBonus.controller'),
  getAllBonus: require('./getAllBonus.controller'),
  updateBonus: require('./updateBonus.controller'),
  updateOrderbonusCode: require('./updateOrderbonusCode.controller'),
}

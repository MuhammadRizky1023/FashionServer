const sequelize = require('../connection');
const UserAddress = require('./UserAddress.js');
const UserType = require('./UserType');
const Category = require('./Category');
const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const Cart = require('./Cart');
UserType.hasMany(User, {
    foreignKey: 'user_type_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  User.belongsTo(UserType, {
    foreignKey: 'user_type_id',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  User.hasOne(Cart, {
    foreignKey: 'user_id',
  });
  
  Cart.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  
  
  User.hasOne(UserAddress, {
    foreignKey: 'user_id',
  });
  
  UserAddress.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });
  
  
  module.exports = {
    sequelize,
    User,
    UserType,
    Category,
    Product,
    Cart,
    Order,
    UserAddress,

  };
  


const User = require('./User');
const Armor = require('./Armor');

// User.hasMany(Armor, {
//   foreignKey: 'id',
//   onDelete: 'CASCADE'
// });

Armor.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Armor };

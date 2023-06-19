const sequelize = require('../config/connection');
const { User, Armor } = require('../models');
//const authenticateUser = require('../utils/auth');

const userData = require('./userData.json');
const monsterSeeds = require('./monsterSeed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const getUserFromAuthentication = () => {
    const currentUser = authenticateUser();
    if (currentUser) {
      return {
        id: currentUser.id,
        username: currentUser.username,
      };
    }
    throw new Error('Please sign in first');
  };

  // const currentUser = getUserFromAuthentication();

  for (const armor of monsterSeeds) {
    const newArmor = await Armor.create({
      ...armor,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    //currentUser.addArmor(newArmor);
  }

  process.exit(0);
};

seedDatabase();

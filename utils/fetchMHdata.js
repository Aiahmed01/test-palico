const { Armor } = require('../models');

async function getHeadArmor() {
  try {
    const headArmor = await Armor.findAll({ where: { type: 'head' } });
    return headArmor;
  } catch (err) {
    console.error('Failed to fetch head armor:', err);
    return [];
  }
}

async function getChestArmor() {
  try {
    const chestArmor = await Armor.findAll({ where: { type: 'chest' } });
    return chestArmor;
  } catch (err) {
    console.error('Failed to fetch chest armor:', err);
    return [];
  }
}

async function getGloves() {
  try {
    const gloves = await Armor.findAll({ where: { type: 'gloves' } });
    return gloves;
  } catch (err) {
    console.error('Failed to fetch gloves:', err);
    return [];
  }
}

async function getWaistArmor() {
  try {
    const waistArmor = await Armor.findAll({ where: { type: 'waist' } });
    return waistArmor;
  } catch (err) {
    console.error('Failed to fetch waist armor:', err);
    return [];
  }
}

async function getLegArmor() {
  try {
    const legArmor = await Armor.findAll({ where: { type: 'legs' } });
    return legArmor;
  } catch (err) {
    console.error('Failed to fetch leg armor:', err);
    return [];
  }
}

module.exports = { getHeadArmor, getChestArmor, getGloves, getWaistArmor, getLegArmor };

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const armorRoutes = require('./armorRoutes');

router.use('/users', userRoutes);
router.use('/armor', armorRoutes);

module.exports = router;

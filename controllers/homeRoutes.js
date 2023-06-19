const router = require('express').Router();
const { Armor, User } = require('../models');
const withAuth = require('../utils/auth');
const db = require('../models')




router.get('/homepage', async (req, res) => {
  const armorData = await Armor.findAll({ raw: true}) 
  const armorTypes = ['head', 'chest', 'gloves', 'waist', 'legs'];
  res.render('homepage', { armors: armorData, types: armorTypes });

});

router.get('/', async (req, res) => {
  const armorData = await Armor.findAll({ raw: true}) 
  const armorTypes = ['head', 'chest', 'gloves', 'waist', 'legs'];
  res.render('homepage', { armors: armorData, types: armorTypes });
});

// router.get('/', async (req, res) => {
  
//     const armorData = await Armor.findAll().catch((err) => { 
//       res.json(err);
//       const armors = armorData.map((armor) => armor.get({ raw: true }));
//       res.render('homepage', { armors });
//     });
//   })



// router.get('/homepage/:id', async (req, res) => {
//   try {
//     const armorData = await Armor.findByPk(req.params.id);
//     const armor = armorData.get({ plain: true });
//     res.render('homepage', armor);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//   }
// });

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    const armorData = await db.Armor.findAll()
    const armors = armorData.map(armor=>armor.get({plain:true}));
    res.render('profile', { armors });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/build', async (req, res) => {
  res.render('build');
});

router.post('/save-armor', async (req, res) => {
  try {
    const { type, name } = req.body;
    const armor = await db.Armor.create({ type, name });
    res.redirect('/profile');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/about', async (req, res) => {
  res.render('about');
});





// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Armor }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

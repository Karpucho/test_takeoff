const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 5);
    const user = await User.create({
      name,
      email,
      password: passwordHash,
    });

    req.session.user = user;
    req.session.isAuthorized = true;

    return res.json(user);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = router;

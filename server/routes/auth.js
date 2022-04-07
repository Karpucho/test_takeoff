const router = require('express').Router();

router.get('/', async (req, res) => {
  if (req.session.user) return res.json(req.session.user);
  res.json({});
});

module.exports = router;

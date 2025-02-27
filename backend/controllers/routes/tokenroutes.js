const express = require('express');
const TokenController = require('../controllers/TokenController');

const router = express.Router();

// Token routes
router.post('/tokens', TokenController.createToken);
router.get('/tokens', TokenController.getAllTokens);
router.get('/tokens/:id', TokenController.getTokenById);
router.put('/tokens/:id', TokenController.updateToken);
router.delete('/tokens/:id', TokenController.deleteToken);

module.exports = router;
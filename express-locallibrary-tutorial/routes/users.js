var express = require('express');
var router = express.Router();


// CRUD user

// Require controller modules.
var user_controller = require('../controllers/userController');

router.get('/', user_controller.user_list);
router.get('/:id', user_controller.user_detail);
router.post('/', user_controller.user_create_post);
router.put('/:id', user_controller.user_update_put);
router.delete('/:id', user_controller.user_delete);

module.exports = router;

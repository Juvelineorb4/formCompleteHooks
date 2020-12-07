const {Router} = require('express');

//con esta contante podemos usar rutas en react 
const router = Router();
const {getForms,postForm} = require('../controllers/forms.controller');
router.route('/')
    .get(getForms)
    .post(postForm);

module.exports= router;
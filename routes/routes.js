const express = require('express');
const { index ,create, store, edit, update, deleteEmployee, } = require('../controllers/controller');
const { upload } = require('../middleware/fileUplodeMiddleware');


const router = express.Router();

//index route
router.get('/',index)

//create route
router.get('/create',create)

//store route
router.post('/store', upload.single('image') ,store)

//edit
router.get('/edit/:id',edit)

//update
router.post('/update/:id', upload.single('image'),update)

//delete
router.post('/delete/:id',deleteEmployee)

module.exports = router;
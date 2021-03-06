const express = require('express');
const router = express.Router();

const ConcertsController = require('../controllers/concerts.controller');

router.get('/concerts', ConcertsController.getAll);
router.get('/concerts/:id', ConcertsController.getById);
router.post('/concerts', ConcertsController.postConcert);
router.put('/concerts/:id', ConcertsController.editConcert);
router.delete('/concerts/:id', ConcertsController.deleteConcert);

module.exports = router;
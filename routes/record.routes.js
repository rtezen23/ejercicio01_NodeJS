const express = require('express');

const {
    getAllRecords,
    createRecord,
    getRecordById,
    updateRecord,
    deleteRecord
} = require('../controllers/record.controller');

const recordRouter = express.Router();

recordRouter.get('/', getAllRecords);
recordRouter.get('/:id', getRecordById);
recordRouter.post('/', createRecord);
recordRouter.patch('/:id', updateRecord);
recordRouter.delete('/:id', deleteRecord);

module.exports = { recordRouter };

const { Record } = require('../models/record.model');

const getAllRecords = async (req, res) => {
    try {
        const records = await Record.findAll();
        res.status(200).json({
            status: 'sucess',
            records
        })
    } catch (error) {
        console.log(error);
    }
};

const getRecordById = async (req, res) => {
    const { id } = req.params;
    const record = await Record.findOne({ where: { id } });

    if (!record) return res.status(404).json({
        status: 'error',
        message: 'Record not found'
    })

    res.status(200).json({
        status: 'success',
        record,
    });

};

const createRecord = async (req, res) => {

    console.log('creando...');

    try {
        const { entranceTime } = req.body;

        const newRecord = await Record.create({
            entranceTime: new Date(entranceTime)
        });

        res.status(201).json({
            status: 'success',
            newRecord
        });

    } catch (error) {
        console.log(error);
    }
};

const updateRecord = async (req, res) => {
    const { id } = req.params;
    const { exitTime } = req.body;

    const record = await Record.findOne({ where: { id } });

    if (!record) return res.status(404).json({
        status: 'error',
        message: 'Record not found'
    })

    await record.update({ exitTime, status: 'out' });

    res.status(201).json({
        status: 'success',
        message: 'Record updated'
    });
};

const deleteRecord = async (req, res) => {
    const { id } = req.params;

    const record = await Record.findOne({ where: { id } });

    if (!record) return res.status(404).json({
        status: 'error',
        message: 'Record not found'
    })

    await record.update({ status: 'cancelled' })

    res.status(201).json({ status: 'success' });

};

module.exports = { getAllRecords, createRecord, getRecordById, updateRecord, deleteRecord };
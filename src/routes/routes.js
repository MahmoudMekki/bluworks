const express = require('express')
const router = express.Router()
const { getIntervalNumbersCount,getMinimumSteps,getStringIndex } = require('../controllers/index')
const { intervalNumbersCountValidator, getStringIndexValidator } = require('../validators/index')
router.get("/interval-count",intervalNumbersCountValidator, getIntervalNumbersCount)
router.get("/input-string",getStringIndexValidator,getStringIndex)
router.get("/numbers/:set",getMinimumSteps)

module.exports= router

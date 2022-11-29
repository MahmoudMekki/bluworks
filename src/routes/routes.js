const express = require('express')
const router = express.Router()
const { getIntervalNumbersCount,getMinimumSteps,getStringIndex } = require('../controllers/index')
const { intervalNumbersCountValidator, getStringIndexValidator, getMinStepsValidator } = require('../validators/index')
router.get("/interval-count",intervalNumbersCountValidator, getIntervalNumbersCount)
router.get("/input-string",getStringIndexValidator,getStringIndex)
router.post("/numbers",getMinStepsValidator,getMinimumSteps)

module.exports= router

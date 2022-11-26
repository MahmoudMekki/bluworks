import Joi from "joi";
import {celebrate} from "celebrate";
const getIntervalNumbersCountValidator = {
    query: {
        start: Joi.number().required(),
        end: Joi.number().required()
    }
}

module.exports ={
    IntervalNumbersCountValidator: celebrate(getIntervalNumbersCountValidator)
}

const Joi = require("joi") ;
const getIntervalNumbersCountSchema = Joi.object().keys({
    query: Joi.object().keys({
        start: Joi.number().required(),
        end: Joi.number().required(),
    })
});

const intervalNumbersCountValidator = (req,res,next)=>{
    const { error } = getIntervalNumbersCountSchema.validate({query: req.query});
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    req.query.start < 0 ? req.query.start *=-1 : req.query.start *=1
    req.query.end < 0 ? req.query.end *=-1 : req.query.end *=1
    req.query.start >= req.query.end ?  res.status(400).json({ error: 'End must be bigger than start' }) : next()
}

module.exports ={
    intervalNumbersCountValidator
}

const Joi = require("joi") ;

const getMinStepsValidatorSchema = Joi.object().keys({
    body: {
        set: Joi.array().items(Joi.number().required()).required()
    }
});

const getMinStepsValidator = (req,res,next)=>{
    const { error } = getMinStepsValidatorSchema.validate({body: req.body});
    if (error) {
        return res.status(400).json({ error: error.message });
    }
    next()
}

module.exports ={
    getMinStepsValidator
}

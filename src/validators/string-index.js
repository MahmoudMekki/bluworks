const Joi = require("joi") ;

const getStringIndexSchema = Joi.object().keys({
    query: Joi.object().keys({
        input: Joi.string().regex(/^[a-zA-Z]*$/).required()
    })
});

const getStringIndexValidator = (req,res,next)=>{
    const { error } = getStringIndexSchema.validate({query: req.query});
    if (error) {
        return res.status(400).json({ error: error.message });
    }
     next()
}

module.exports ={
    getStringIndexValidator
}

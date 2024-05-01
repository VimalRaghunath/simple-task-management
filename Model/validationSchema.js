const joi = require("@hapi/joi")


const joiUserValidationSchema = joi.object({

    name: joi.string(),
    email: joi.string(),
    password: joi.string()

});

module.exports = { joiUserValidationSchema }

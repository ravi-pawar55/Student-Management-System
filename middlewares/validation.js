const validator = require('../config/validate');

exports.validateSignin = async (req, res, next) => {
    validationRule = {
        "email": "required|string|email",
        "password": "required|string|min:5",
    };

    await validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed',
                    data: err
                });
        } else {
            next();
        }
    }).catch( err => console.log(err))
}


 

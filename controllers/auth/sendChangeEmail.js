const db = require('../../dataBase').getInstance();
const {sendEmailChangePassword} = require('../../helpers');
const ControllerError = require('../../error/ControllerError');

module.exports = async (req, res, next) => {
    try {
        const UserModel = db.getModel('User');
        const {id, name} = req.user;
        const isPresent = await UserModel.findOne({
            where: {
                id, name
            }
        });
        if (!isPresent) throw new Error('User is not present');

        const info = await sendEmailChangePassword(id);

        res.json({
            success: true,
            msg: info
        })
    } catch (e) {
        next(new ControllerError(e.message, e.status, 'sendChangeEmail'))
    }
};

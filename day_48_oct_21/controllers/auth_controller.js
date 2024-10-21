const userModel = require("../models/user-model");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require('jsonwebtoken');
const JWT_KEY = require("../config/JWT_SECRET_KEY");

exports.register = async function (req, res) {
    const payload = req.body;
    payload.password = bcrypt.hashSync(payload.password, 8);
    try {
        const newUser = new userModel(payload);
        await newUser.save();
        res.status(200).send('User Added Succesfully!!')
    } catch (err) {
        res.status(500).send('Server error')
    }
}
exports.login = async function (req, res) {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            res.status(401).send({ auth: false, msg: `No User Found with ${email}` })
        } else {
            const passIsValid = bcrypt.compareSync(password, user.password);

            if (!passIsValid) {
                res.status(401).send({ auth: false, msg: `Invalid Password` })
            }
            // incase email is present and password is correct
            // generate JWT for the user and return
            let token = jsonwebtoken.sign({ id: user._id }, JWT_KEY, { expiresIn: 60 * 2 });
            res.status(200).send({ auth: true, token, expiresIn: 60 * 2 });
        }
    } catch (err) {
        res.status(500).send('Server error')
    }
}
exports.logout = function () {

}
const { myError } = require("../middlewares/MyErrorHandler");

exports.getAllToDos = async (req, res, next) => {
    try {
        let response = await fetch('https://jsonplaceholder.ypicode.com/todos');
        let finalRsponse = await response.json();
        res.json(finalRsponse);
    } catch (err) {
        console.log('something is wrong');
        // next(err);
    }
}
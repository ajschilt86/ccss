const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.answerSchema
            .find(req.query)
    }
}
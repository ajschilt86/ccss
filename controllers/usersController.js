const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.Answers
            .find(req.query)
            .sort({ date: -1 })
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    },
    findByQuest: (req, res) => {
        db.Answers
            .findByQuest({question: req.params.id})
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    },
    findByUID: (req, res) => {
        db.Answers
            .findById({UID: req.params.id})
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Answers
            .create(req.body)
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Answers
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbAnswers => res.json(dbAnswers))
            .catch(err => res.status(422).json(err));
    }
}
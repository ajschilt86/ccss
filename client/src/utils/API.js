import axios from "axios";

export default {
    getAnswersByUID: function (UID) {
        return axios.get("/api/users/answers/all/" + UID)
    },
    getAll: function () {
        return axios.get("/all", function () {
        })
    },
    getAnswersByQuest: function (userAnswer) {
        return axios.get("api/users/answers/" + userAnswer)
    },

    //added getAnswersByIndustry to filter answers by industry
    getAnswersByIndustry: function (userAnswer) {
        return axios.get("api/users/industry/" + userAnswer)
    },
    saveAnswers: function (userAnswer) {
        return axios.post("api/users/answers", userAnswer)
            .catch(err => console.log(err))
    },
    updateAnswer: function (id) {
        return axios.post("api/answers/" + id)
    }
}


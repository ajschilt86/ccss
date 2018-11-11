import axios from "axios";

export default {
    getAnswersByUID: function (id) {
        return axios.get("/api/users/" + id)
    },
    getAll: function(){
        return axios.get("/all", function(){
            console.log('Hitting get route');
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
            .then(console.log(userAnswer))
            .catch(err => console.log(err))
    },
    updateAnswer: function (id) {
        return axios.post("api/answers/" + id)
    }
}


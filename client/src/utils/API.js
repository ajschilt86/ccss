import axios from "axios";

export default {
    getAnswersByUID: function(id) {
        return axios.get("/api/users/" + id)
    },
    getAnswersByQuest: function(id) {
        return axios.get("api/questions/" + id)
    },
    saveAnswers: function(userAnswer) {
        return axios.post("/api/answers", userAnswer)
    },    
    updateAnswer: function(id) {
        return axios.post("api/answers/" + id)
    }
}


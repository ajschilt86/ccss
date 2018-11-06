// Headline model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var answersSchema = new Schema({
  // headline, a string, must be entered
  question: {
    type: String,
    required: false
  },
  answer: {
    type: String,
    required: true
  },
  // summary, a string, must be entered
  UID: {
    type: String,
    required: false
  },
  // url, a string, must be entered
  industry: {
    type: String,
    required: true
  },
  // date is just a string  
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

// Create the Headline model using the headlineSchema
var Answers = mongoose.model("Answers", answersSchema);

// Export the Headline model
module.exports = Answers;

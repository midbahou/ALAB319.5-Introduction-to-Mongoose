import mongoose from "mongoose";

const learnerSchema = new mongoose.Schema({
  class_id: {
    type: Number,
    required: true,
  },

  scores: [
    {
      type: {
        type: String,
        required: true,
      },
      score: {
        type: Number,
        required: true,
      },
    },
  ],

  learner_id:{
    type: Number,
    required: true,
  }
});

learnerSchema.index({ class_id: 1 })
learnerSchema.index({ scores: 1 })
learnerSchema.index({ learner_id: 1 })

export default mongoose.model("Grades", learnerSchema);

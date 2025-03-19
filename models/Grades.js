import mongoose from "mongoose";


const learnerSchema = new mongoose.Schema({
    class_id: {
        type: Number,
        required: true
    },

    scores: {
        // type: Object,
        type:
        {
            type: String,
            score: Number
        }

    }
})

export default mongoose.model("Grades", learnerSchema)
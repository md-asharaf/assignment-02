import {Schema,models,Model,model} from "mongoose";
import { ITopic} from "../types";


const TopicSchema = new Schema<ITopic>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export default (models?.Topic as Model<ITopic>) ||
    model<ITopic>("Topic", TopicSchema);

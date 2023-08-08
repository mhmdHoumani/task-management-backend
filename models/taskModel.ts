import { Schema, model } from "mongoose";
import { IMongooseTask } from "../types/task.type";

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    dob: {
      type: Date,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = model<IMongooseTask>("tasks", TaskSchema);
export default Task;

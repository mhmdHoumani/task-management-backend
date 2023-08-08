import { Schema, model, models } from "mongoose";
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
    due_date: {
      type: Date,
      trim: true,
      required: true,
    },
  },
  { timestamps: true }
);

const Task = models.Task || model<IMongooseTask>("Task", TaskSchema);
export default Task;

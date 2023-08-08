import { Request, Response } from "express";
import Task from "../models/taskModel";
import { IMongooseTask } from "../types/task.type";

const getAllTasks = async (req: Request, res: Response) => {
    try {
      const tasks: IMongooseTask[] = await Task.find({});
      return res.status(200).json({
        status: 200,
        data: tasks,
      });
    } catch (error: any) {
      console.log("ERROR IN GET ALL Tasks:::::\n", error);
      return res.json({
        status: 500,
        message: error.message,
        in: "ERROR IN GET ALL Tasks",
      });
    }
  }
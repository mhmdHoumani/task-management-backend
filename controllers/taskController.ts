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
};

/**************************************/
/************** GET TASK **************/
/**************************************/
const getTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const task: IMongooseTask | null = await Task.findById(id);
    if (!task) {
      return res.json({
        status: 404,
        message: "Task not found",
      });
    }
    return res.status(200).json({
      status: 200,
      data: task,
    });
  } catch (error: any) {
    console.log("ERROR IN GET ONE TASK:::::\n", error);
    return res.json({
      status: 500,
      message: error.message,
      in: "ERROR IN GET ONE TASK",
    });
  }
};

/**********************************************/
/************** EDIT INFORMATION **************/
/**********************************************/
const editTask = async (req: Request, res: Response) => {
  const { title, description, due_date } = req.body;
  const { id } = req.params;
  if (!title || !description || !due_date) {
    return res.json({
      status: 403,
      message: "All fields must be provided",
    });
  }
  try {
    let task: IMongooseTask | null = await Task.findOne({
      _id: id,
    });
    if (!task) {
      return res.json({
        status: 404,
        message: "Task not found",
      });
    }
    await Task.updateOne(
      { _id: id },
      {
        title,
        description,
        due_date,
      }
    );

    return res.status(200).json({
      status: 200,
      data: "Task updated successfully",
    });
  } catch (error: any) {
    console.log("ERROR IN EDIT TASK INFORMATION:::::\n", error);
    return res.json({
      status: 500,
      message: error.message,
      in: "ERROR IN EDIT TASK INFORMATION",
    });
  }
};

/*****************************************/
/************** DELETE TASK **************/
/*****************************************/
const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const task: IMongooseTask | null = await Task.findById(id);
    if (!task) {
      return res.json({
        status: 404,
        message: "Task not found",
      });
    }
    await Task.deleteOne({ _id: id });
    return res.status(200).json({
      status: 200,
      data: "Task deleted successfully",
    });
  } catch (error: any) {
    console.log("ERROR IN DELETE Task:::::\n", error);
    return res.json({
      status: 500,
      message: error.message,
      in: "ERROR IN DELETE Task",
    });
  }
};

const createTask = async (req: Request, res: Response) => {
  const { title, description, due_date } = req.body;
  if (!title || !description || !due_date) {
    return res.json({
      status: 403,
      message: "All fields must be provided",
    });
  }
  try {
    await Task.create({
      title,
      description,
      due_date,
    });
    return res.status(201).json({
      status: 201,
      data: "Task created successfully",
    });
  } catch (error: any) {
    console.log("ERROR IN ADD TASK:::::\n", error);
    return res.json({
      status: 500,
      message: error.message,
      in: "ERROR IN ADD TASK",
    });
  }
};

export { getAllTasks, getTask, editTask, deleteTask, createTask };

import { Document, Schema } from "mongoose";

export interface ITask {
  title: string;
  description: string;
  due_date: Date;
}

// export interface IAuthReturn {
//   status?: boolean;
//   statusCode?: number;
//   code?: string;
//   message?: string;

//   token: string;
// }

export interface IMongooseTask extends Document, ITask {
  _id: Schema.Types.ObjectId;
}

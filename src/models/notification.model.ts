import mongoose, { Document, Schema } from "mongoose";

export interface INotification extends Document {
  message: string;
  type: string;
  priority: number;
  sendTime: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const NotificationSchema: Schema = new Schema(
  {
    message: { type: String, required: true },
    type: { type: String, required: true },
    priority: { type: Number, required: true, min: 1, max: 5 },
    sendTime: { type: Date, required: true },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Notification = mongoose.model<INotification>("Notification", NotificationSchema);

export default Notification;

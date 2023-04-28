// user.schema.ts
import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  _id: { type: String, required: true }, // 覆盖 Mongoose 生成的默认 _id
  username: { type: String, required: true },
  avatar_url: { type: String, required: true },
  created_at: { type: String, required: true },
  nickname: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  updated_at: { type: String, required: true },
  role: { type: String, required: true },
});

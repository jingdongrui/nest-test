import { Document } from 'mongoose';

export interface User extends Document {
  readonly _id: String;
  readonly username: String;
  readonly avatar_url: String;
  readonly created_at: String;
  readonly nickname: String;
  readonly password: String;
  readonly phone: String;
  readonly updated_at: String;
  readonly role: String;
}

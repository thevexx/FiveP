import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

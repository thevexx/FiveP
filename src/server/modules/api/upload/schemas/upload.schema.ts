import * as mongoose from 'mongoose';

export const fileSchema = new mongoose.Schema({
  name: String,
  url: String
});

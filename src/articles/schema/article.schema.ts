import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  id: Number,
  title: String,
  content: String,
  created: Date,
  author: String,
});

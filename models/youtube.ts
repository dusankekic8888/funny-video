import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const Youtube = new Schema({
  id: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  idVideo: {
    type: String,
    required: true,
  },
  vote: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: Date,
});

export default mongoose.models.Youtube || mongoose.model('Youtube', Youtube);

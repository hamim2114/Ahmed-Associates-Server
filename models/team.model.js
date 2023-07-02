import mongoose, {Schema} from 'mongoose';

const TeamSchema = new Schema(
  {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  {timestamps: true}
);
export default mongoose.model('Team', TeamSchema);

import mongoose, {Schema} from 'mongoose';

const AuthSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  {timestamps: true}
);
export default mongoose.model('Auth', AuthSchema);

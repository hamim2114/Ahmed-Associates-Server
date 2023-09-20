import mongoose, {Schema} from 'mongoose';

const TeamSchema = new Schema(
  {
    img: {
      type: String,
    },
    imgId: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);
export default mongoose.model('Team', TeamSchema);

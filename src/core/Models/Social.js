import mongoose from 'mongoose';

const SocialSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    link: { type: String, trim: true, default: '' },
    username: { type: String, trim: true, default: '' },
    icon: { type: String, trim: true },
    status: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.models.Social || mongoose.model('Social', SocialSchema);

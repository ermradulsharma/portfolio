import mongoose from 'mongoose';
import { slugify } from '../Helpers/string.js';

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true, lowercase: true, trim: true },
    icon: { type: String, trim: true },
    description: { type: String, trim: true },
    is_active: { type: Boolean, default: true }
}, {
    timestamps: true
});

// Trigger to auto-generate URL safe slug using global standardized helper
CategorySchema.pre('save', function() {
    if (this.isModified('name')) {
        this.slug = slugify(this.name);
    }
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);

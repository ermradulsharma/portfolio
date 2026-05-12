import mongoose from 'mongoose';
import { slugify } from '../Helpers/string.js';

const TechnologySchema = new mongoose.Schema({
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    name: { type: String, required: true, unique: true, trim: true },
    slug: { type: String, unique: true, lowercase: true, trim: true },
    icon: { type: String, trim: true },
    description: { type: String, trim: true },
}, {
    timestamps: true
});

TechnologySchema.pre('save', function() {
    if (this.isModified('name')) {
        this.slug = slugify(this.name);
    }
});
TechnologySchema.index({ category: 1, name: 1 });

export default mongoose.models.Technology || mongoose.model('Technology', TechnologySchema);

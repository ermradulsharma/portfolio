import mongoose from 'mongoose';
import { slugify } from '../Helpers/string.js';

const ProjectSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technology' }],
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, lowercase: true, trim: true },
    description: { type: String, required: true },
    link: {
        live: { type: String, trim: true },
        github: { type: String, trim: true }
    },
    image: [{
        public_id: { type: String, trim: true },
        url: { type: String, trim: true },
    }],
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now },
    caseStudy: { type: String },
    published: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    publishAt: { type: Date, default: Date.now },
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    seo: {
        title: { type: String, trim: true },
        description: { type: String, trim: true },
        keywords: [{ type: String, trim: true }]
    }
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

ProjectSchema.index({ title: 'text', description: 'text' });
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ published: 1, isFeatured: -1 });
ProjectSchema.pre('save', function () {
    if (this.isModified('title')) {
        this.slug = slugify(this.title);
    }
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);

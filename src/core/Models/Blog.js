import mongoose from 'mongoose';
import { slugify } from '../Helpers/string.js';

const BlogSchema = new mongoose.Schema({
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }],
    technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technology' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    slug: { type: String, unique: true, lowercase: true, trim: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    image: [{
        public_id: { type: String, trim: true },
        url: { type: String, trim: true },
    }],
    published: { type: Boolean, default: true },
    publishAt: { type: Date, default: Date.now },
    isFeatured: { type: Boolean, default: false },
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

// 🚀 Powerful Indexes for High Performance Mining
BlogSchema.index({ title: 'text', description: 'text' }); // Enables Ultra-Fast Text Search!
BlogSchema.index({ slug: 1 }); // Bulletproof retrieval via URL slug
BlogSchema.index({ publishAt: -1, isFeatured: -1 }); // Highly efficient sorting for landing pages
BlogSchema.index({ categories: 1 }); // Relational multi-key aggregation speed-up
BlogSchema.index({ technologies: 1 }); // Lightning-fast Tech-specific content filters

BlogSchema.virtual('readTime').get(function () {
    if (!this.content) return '1 min read';
    const wordsPerMinute = 200;
    const words = this.content.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute) + ' min read';
});

BlogSchema.pre('save', function () {
    if (this.isModified('title')) {
        this.slug = slugify(this.title);
    }
});

export default mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

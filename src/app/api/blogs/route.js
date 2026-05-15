import { NextResponse } from 'next/server';
import dbConnect from '@/core/Config/db';
import Blog from '@/core/Models/Blog';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();
        
        // Fetching blogs sorted by newest first, populating categories basic info if necessary
        const blogs = await Blog.find({})
            .sort({ createdAt: -1 })
            .populate('categories', 'name icon');

        return NextResponse.json({ 
            success: true, 
            count: blogs.length, 
            data: blogs 
        }, { status: 200 });

    } catch (error) {
        console.error("API [Blogs] Failure:", error);
        return NextResponse.json({ 
            success: false, 
            message: "Failed to retrieve content scripts" 
        }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import dbConnect from '@/core/Config/db';
import Project from '@/core/Models/Project';

export const dynamic = 'force-dynamic';

// GET handler to list projects
export async function GET() {
    try {
        await dbConnect();
        const projects = await Project.find({}).sort({ createdAt: -1 }).populate('category', 'name icon').populate('technologies', 'name icon').populate('user', 'name');
        return NextResponse.json({ success: true, count: projects.length, data: projects }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Failed to retrieve projects", error: error.message }, { status: 500 });
    }
}

// POST handler to create a new project
export async function POST(request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { user, category, technologies, title, slug, description, link, image, startDate, endDate, caseStudy, published, isFeatured, publishAt, seo } = body;
        if (!user || !category || !title || !description) {
            return NextResponse.json({ success: false, message: "Required fields missing: user, category, title, description are mandatory." }, { status: 400 });
        }
        const newProject = await Project.create({
            user, category, technologies: technologies || [],
            title,
            slug: slug || undefined, // fallback to pre-save slugify if empty
            description,
            link: {
                live: link?.live || "",
                github: link?.github || ""
            },
            image: image || [],
            startDate: startDate || new Date(),
            endDate: endDate || new Date(),
            caseStudy: caseStudy || "",
            published: published !== undefined ? published : true,
            isFeatured: isFeatured !== undefined ? isFeatured : false,
            publishAt: publishAt || new Date(),
            seo: {
                title: seo?.title || "",
                description: seo?.description || "",
                keywords: seo?.keywords || []
            }
        });

        return NextResponse.json({ success: true, message: "Project successfully cataloged!", data: newProject }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Failed to instantiate database record.", error: error.message }, { status: 500 });
    }
}

// DELETE handler to remove projects
export async function DELETE(request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        
        if (!id) {
            return NextResponse.json({ success: false, message: "Required index ID parameter is absent." }, { status: 400 });
        }

        const deletedProject = await Project.findByIdAndDelete(id);

        if (!deletedProject) {
            return NextResponse.json({ success: false, message: "Entity target not found." }, { status: 404 });
        }

        return NextResponse.json({ success: true, message: "Entity wiped successfully." }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Purge execution error.", error: error.message }, { status: 500 });
    }
}


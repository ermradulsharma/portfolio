import { NextResponse } from 'next/server';
import dbConnect from '@/core/Config/db';
import Social from '@/core/Models/Social';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();
        const socials = await Social.find({}).sort({ name: 1 });
        return NextResponse.json({ 
            success: true, 
            count: socials.length, 
            data: socials 
        }, { status: 200 });
    } catch (error) {
        console.error("API [Socials] Failure:", error);
        return NextResponse.json({ 
            success: false, 
            message: "Failed to retrieve social links" 
        }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        await dbConnect();
        const { id, ...updateData } = await request.json();
        if (!id) {
            return NextResponse.json({ success: false, message: "Resource Identifier Required" }, { status: 400 });
        }
        const updated = await Social.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) {
            return NextResponse.json({ success: false, message: "Social link not found" }, { status: 404 });
        }
        return NextResponse.json({ success: true, data: updated }, { status: 200 });
    } catch (error) {
        console.error("API [Socials Update] Failure:", error);
        return NextResponse.json({ success: false, message: "Failed to update social records" }, { status: 500 });
    }
}

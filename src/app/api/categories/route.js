import { NextResponse } from 'next/server';
import dbConnect from '@/core/Config/db';
import Category from '@/core/Models/Category';
export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();
        const categories = await Category.find({}).sort({ name: 1 });
        return NextResponse.json({ success: true, count: categories.length, data: categories }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}

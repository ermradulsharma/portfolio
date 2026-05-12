import { NextResponse } from 'next/server';
import dbConnect from '@/core/Config/db';
import Technology from '@/core/Models/Technology';

export const dynamic = 'force-dynamic';

export async function GET(req) {
    try {
        await dbConnect();
        const { searchParams } = new URL(req.url);
        const categoryId = searchParams.get('categoryId');
        
        let query = {};
        if (categoryId) {
            query.category = categoryId;
        }

        const techs = await Technology.find(query).sort({ name: 1 });
        return NextResponse.json({ success: true, count: techs.length, data: techs }, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import dbConnect from '@/core/Config/db';
import User from '@/core/Models/User';

export const dynamic = 'force-dynamic';

export async function GET() {
    try {
        await dbConnect();
        const users = await User.find({ is_active: true, deleted_at: null }).select('name email role');
        return NextResponse.json({ success: true, data: users }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false }, { status: 500 });
    }
}

import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function guestMiddleware(request) {
    const tokenCookie = request.cookies.get('admin_token');
    const token = tokenCookie?.value || null;
    if (token) {
        try {
            jwt.verify(token, JWT_SECRET);
            return NextResponse.redirect(new URL('/admin', request.url));
        } catch (e) {
            return null;
        }
    }
    return null;
}

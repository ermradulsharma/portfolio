import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

export default async function authMiddleware(request) {
    const tokenCookie = request.cookies.get('admin_token');
    const token = tokenCookie?.value || null;

    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        jwt.verify(token, JWT_SECRET);
        return null;
    } catch (err) {
        const response = NextResponse.redirect(new URL('/login', request.url));
        response.cookies.delete('admin_token');
        return response;
    }
}
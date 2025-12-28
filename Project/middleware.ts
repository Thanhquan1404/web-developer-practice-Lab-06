import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory rate limiting (for demo; use Redis in production)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/ask')) {
    const ip = request.ip || 'unknown';
    const now = Date.now();
    const windowMs = parseInt(process.env.RATE_LIMIT_WINDOW || '60000'); // 1 minute
    const maxRequests = parseInt(process.env.RATE_LIMIT_MAX || '10');

    const userLimit = rateLimit.get(ip);

    if (!userLimit || now > userLimit.resetTime) {
      rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    } else if (userLimit.count >= maxRequests) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    } else {
      userLimit.count++;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
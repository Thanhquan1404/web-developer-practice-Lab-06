import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware running for:', request.nextUrl.pathname);
  // Check if the request is to /api/secret
  if (request.nextUrl.pathname.startsWith('/api/secret')) {
    const apiKey = request.headers.get('x-api-key');
    const secretKey = process.env.API_SECRET;
    console.log('API Key:', apiKey, 'Secret Key:', secretKey);

    if (apiKey !== secretKey) {
      console.log('Unauthorized');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
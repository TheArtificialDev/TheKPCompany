import { NextRequest, NextResponse } from 'next/server';
import { subscriptionService } from '@/lib/subscriptionService';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { email } = await request.json();
    
    // Validate email (handled inside subscribeEmail)
    const result = await subscriptionService.subscribeEmail(email);
    
    if (!result.success) {
      return NextResponse.json(
        { error: result.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: result.message 
      },
      { status: 200 }
    );  } catch (_error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

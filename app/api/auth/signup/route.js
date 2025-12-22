import { NextResponse } from 'next/server';
import { signUp } from '@/lib/firebase/auth';

export async function POST(request) {
  try {
    const { email, password, name, phone } = await request.json();

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create user
    const { user, error } = await signUp(email, password, { name, phone });

    if (error) {
      return NextResponse.json(
        { error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
